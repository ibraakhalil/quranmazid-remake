import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and merges Tailwind CSS classes using twMerge.
 *
 * @param classes - The class names to combine.
 * @returns The combined class name string.
 */

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}
