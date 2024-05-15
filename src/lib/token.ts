import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from './db';

interface IValidatedToken {
  id: number;
  iat: number;
  exp: number;
}

export const generateToken = async (email: string, password: string) => {
  try {
    const person = await db.person.findUnique({
      where: {
        email
      }
    });

    const passwordMatch = await bcrypt.compare(
      password,
      person?.password as string
    );
    if (!person || !passwordMatch) {
      throw new Error('Invalid Credentials');
    }

    return jwt.sign({ id: person.id }, process.env.JWT_SECRET as string, {
      expiresIn: '1hr'
    });
  } catch (err: any) {
    throw new Error((err as any)?.message);
  }
};

export const validateToken = async (
  token: string | null
): Promise<IValidatedToken | void | null> => {
  if (!token) {
    // Throw Error and status code 401 if token is not provided
    throw new Error('Token is required', 401);
  }
  try {
    const decodedToken: IValidatedToken | void = jwt.verify(
      token.split(' ')[1],
      process.env.JWT_SECRET as string,
      function (err, payload) {
        //@ts-ignore
        if (err) {
          throw new Error(err?.message);
        } else {
          return payload;
        }
      }
    );
    return decodedToken;
  } catch (err: any) {
    throw new Error((err as any)?.message);
  }
};
