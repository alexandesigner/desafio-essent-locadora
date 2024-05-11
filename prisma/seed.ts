import { Prisma } from '@prisma/client'
import bcrypt from 'bcrypt'
import { db } from '../src/lib/db'

const seed = async () => {
  const password = await bcrypt.hash('password', 10)

  try {
    const data: Prisma.CategoryCreateArgs['data'][] = [
      {
        name: 'Ação',
      },
      {
        name: 'Aventura',
      },
      {
        name: 'Animação',
      },
      {
        name: 'Comédia',
      },
      {
        name: 'Drama',
      },
      {
        name: 'Fantasia',
      },
      {
        name: 'Terror',
      },
      {
        name: 'Romance',
      },
      {
        name: 'Ficção Cientifica',
      },
    ]

    console.log('Seeding category...')

    db.category
      .createMany({
        data,
      })
      .then(() => {
        console.log('@@ Seed category')
      })
      .catch(error => {
        console.log('@@ Erro no seed da entidade category', error)
      })
  } catch (error) {
    console.warn('Por favor, revise o seed')
    console.error(error)
  }

  try {
    const data: Prisma.PersonCreateArgs['data'][] = [
      {
        full_name: 'User Admin',
        email: 'user@email.com',
        password: '$2b$10$IPL0QXw.4u7v/bFsfpf8newC4fHKBmGXAxk7tWqg1TwiACbKjgbRO', // secret123
        type: 'USER',
        avatar: '',
      },
      {
        full_name: 'Levi Ciddar',
        email: 'client@milkgitter.com',
        password: password,
        type: 'CLIENT',
        avatar: '',
      },
    ]

    console.log('Seeding people...')

    db.person
      .createMany({
        data,
      })
      .then(() => {
        console.log('@@ Seed people')
      })
      .catch(error => {
        console.log('@@ Erro no seed da entidade people', error)
      })
  } catch (error) {
    console.warn('Por favor, revise o seed')
    console.error(error)
  }

  try {
    const data: Prisma.MoviePersonCreateArgs['data'][] = [
      {
        full_name: 'Quentin Tarantino',
        type: 'DIRECTOR',
        avatar: '',
      },
      {
        full_name: 'Samuel L. Jackson',
        type: 'ACTOR',
        avatar: '',
      },
    ]

    console.log('Seeding movie cast...')

    db.moviePerson
      .createMany({
        data,
      })
      .then(() => {
        console.log('@@ Seed movie cast')
      })
      .catch(error => {
        console.log('@@ Erro no seed da entidade movie cast', error)
      })
  } catch (error) {
    console.warn('Por favor, revise o seed')
    console.error(error)
  }

  try {
    const movies: Prisma.MovieCreateManyInput[] = [
      {
        title: 'Movie Title 1',
        release_year: 2022,
        thumb_image: 'movie_image_1.jpg',
        featured_image: 'movie_image_1.jpg',
        synopsis: 'Synopsis of Movie 1',
        rental_value: 5.99,
        category_id: 1,
      },
      {
        title: 'Movie Title 2',
        release_year: 2023,
        thumb_image: 'movie_image_2.jpg',
        featured_image: 'movie_image_1.jpg',
        synopsis: 'Synopsis of Movie 2',
        rental_value: 6.99,
        category_id: 1,
      },
    ]

    console.log('Seeding movies...')

    db.movie.createMany({
      data: movies,
    })
      .then(() => {
        console.log('@@ Seed movies')
      })
      .catch(error => {
        console.log('@@ Erro no seed da entidade movies', error)
      })

  } catch (error) {
    console.warn('Por favor, revise o seed')
    console.error(error)
  }

  try {

    const person = await db.moviePerson.findUnique({
      where: { id: 1 },
    });
    if (person) {
      console.log('Seeding movie cast...')

      db.movieCast
        .createMany({
          data: {
            person_id: 1,
            movie_id: 1,
          },
        })
        .then(() => {
          console.log('@@ Seed movie cast')
        })
        .catch(error => {
          console.log('@@ Erro no seed da entidade movie cast', error)
        })
    }
  } catch (error) {
    console.warn('Por favor, revise o seed')
    console.error(error)
  }

  try {
    const movie = await db.movie.findUnique({
      where: { id: 1 },
    });
    if (movie) {
    console.log('Seeding movies stock...')

    db.movieStock.createMany({
      data: {
        movie_id: 1,
      }
    })
      .then(() => {
        console.log('@@ Seed movies stock')
      })
      .catch(error => {
        console.log('@@ Erro no seed da entidade movies stock', error)
      })
    }
  } catch (error) {
    console.warn('Por favor, revise o seed')
    console.error(error)
  }
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })