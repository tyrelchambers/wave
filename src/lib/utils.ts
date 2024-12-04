import type { Data } from "@/data/data";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const collectAll = (data: Data[], tag: keyof Data) => {
  if (!tag) throw new Error("Tag is required");
  const set = new Set<string>();

  for (const item of data) {
    if (!item[tag]) continue;
    for (const t of item[tag]) {
      set.add(t);
    }
  }

  return Array.from(set);
};
