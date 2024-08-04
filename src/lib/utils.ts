import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number | Date): string {
  return new Date(input).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function toCapitalize(input: string) {
  if (typeof input !== 'string' || input.length === 0) {
    return ''
  }
  return input.charAt(0).toUpperCase() + input.slice(1)
}
