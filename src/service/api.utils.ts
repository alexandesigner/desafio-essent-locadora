import { ParamsWithPagination, Pagination } from '@/types';

export function generateRandomNumber(): number {
  return Math.floor(Math.random() * 100) + 1;
}

export function excludeFromObject<T, K extends keyof T>(
  obj: any,
  keys: K[]
): Omit<T, K> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as K))
  ) as Omit<T, K>;
}

export function excludeFromList<T, K extends keyof T>(
  objects: T[],
  keysToDelete: K[]
): Omit<T, K>[] {
  return objects.map((obj) => excludeFromObject(obj, keysToDelete)) as Omit<
    T,
    K
  >[];
}

export function paginate<T>(
  data: T[],
  params: ParamsWithPagination,
  total: number
): { paginationResults: Pagination } {
  const { page, limit } = params;
  const total_pages = Math.ceil(total / limit);
  const has_next_page = page < total_pages;
  const has_prev_page = page > 1;
  const next_page = has_next_page ? page + 1 : undefined;
  const prev_page = has_prev_page ? page - 1 : undefined;

  const paginationResults: Pagination = {
    page,
    limit,
    total_elements: total,
    total_pages,
    has_next_page,
    has_prev_page,
    next_page,
    prev_page
  };

  return { paginationResults };
}

interface WithPaginationParams {
  model: any;
  pagination: ParamsWithPagination;
  where?: any;
  fieldsToExclude?: string[] | any;
}

export async function withPagination({
  model,
  pagination,
  where,
  fieldsToExclude,
  ...rest
}: WithPaginationParams) {
  let page = 1;
  let limit = 10;

  if (pagination?.page && pagination?.limit) {
    page = pagination?.page;
    limit = pagination?.limit;
  }

  const content = await model.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where,
    ...rest
  });

  const total = await model.count({
    where
  });

  const { paginationResults } = paginate(
    content,
    {
      page,
      limit
    },
    total
  );

  return {
    pagination: paginationResults,
    content:
      fieldsToExclude != null || fieldsToExclude?.length
        ? excludeFromList(content, fieldsToExclude)
        : content
  };
}
