"use client";

import { useState } from "react";

export function usePaginatedFilter<T>(
  initItems: T[],
  pageSize: number,
  fetcher: (tags: string[]) => Promise<T[]>,
) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [items, setItems] = useState<T[]>(initItems);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleTagSelect = async (tagName: string) => {
    const next = selectedTags.includes(tagName)
      ? selectedTags.filter((t) => t !== tagName)
      : [...selectedTags, tagName];
    setSelectedTags(next);
    setCurrentPage(0);

    if (next.length === 0) {
      setItems(initItems);
    } else {
      setIsLoading(true);
      const fetched = await fetcher(next);
      setItems(fetched);
      setIsLoading(false);
    }
  };

  const totalPages = Math.ceil(items.length / pageSize);
  const paginated = items.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return { selectedTags, items, currentPage, setCurrentPage, isLoading, totalPages, paginated, handleTagSelect };
}
