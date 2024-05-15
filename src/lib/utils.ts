import { GroupedCategory, List, MovieResponseData } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseIdAndNameToOpts(data: { id: number; name: string }[]) {
  if (!data) {
    return [];
  }
  return data.map((item) => ({
    ...item,
    label: item.name,
    value: item.id
  }));
}

export function removeEmptyValuesFromList(list: any[]) {
  if (!list) return [];
  return list.filter((item) => item != null);
}

export const currentExtenseDate = () => {
  const current = new Date();
  const extenseDate = current.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const hora = current.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const parsed = extenseDate + ' - ' + hora;
  return parsed;
};

export function capitalizeFirstLetter(str: string) {
  if (str?.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatBRLCurrency(value: number): string {
  if (!value) return 'R$ 0,00';
  const maskCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(+String(value)?.replace(/\D/g, '') / 100);
  return maskCurrency;
}

export function formatStringCurrencyToNumber(value: string): number {
  return Number(value?.replace('R$', '').replace(/\./g, '').replace(',', '.'));
}

export function getInitials(name: string): string {
  const [firstName, ...restName] = name.split(' ');
  let initials = '';

  initials += firstName.charAt(0).toUpperCase();

  if (restName.length > 0) {
    initials += restName.map((word) => word.charAt(0).toUpperCase()).join('');
  }

  return initials;
}

export function formatDateLocale(date: string | Date): string {
  return new Date(date).toLocaleDateString('pt-BR');
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function slugify(text: string) {
  if (!text) return '';
  return text
    .toString()
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export const pluralize = (value: number) => value > 1;

export function groupByCategory(
  movies: MovieResponseData[] | List[]
): GroupedCategory[] {
  if (!movies) return [];

  const categoriesMap: Map<number, GroupedCategory> = movies.reduce(
    (acc, movie) => {
      const categoryId = movie.category.id;

      if (!acc.has(categoryId)) {
        const category: GroupedCategory = {
          id: categoryId,
          title: movie.category.name,
          slugPath: slugify(movie.category.name),
          data: []
        };
        acc.set(categoryId, category);
      }

      const category = acc.get(categoryId)!;
      category?.data?.push(movie as List);

      return acc;
    },
    new Map<number, GroupedCategory>()
  );

  return Array.from(categoriesMap.values());
}

export function removeDuplicates(arr: any[]) {
  if (!arr?.length) return [];
  const seen = new Set();
  return arr.filter((el: any) => {
    const duplicate = seen.has(el.value);
    seen.add(el.value);
    return !duplicate;
  });
}
