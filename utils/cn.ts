import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: (string | false | null | undefined)[]): string {
  return twMerge(clsx(...classes));
}
