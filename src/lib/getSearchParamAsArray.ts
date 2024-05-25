import type { CollectionEntry } from "astro:content";
import { URLSearchParams } from "url";

export default function getSearchParamsAsArray(url: URL, key: string) {
  const params = new URLSearchParams(url.search);
  const value = params.get(key);

  if (!value) {
    return [];
  }

  return value.split(",") as CollectionEntry<"tools">["id"][];
}