"use client";

import { IProfessor } from "@/utils/interfaces";
import { getContent } from "@/utils/contentful";
import { PROFESSORS_FILTERED_QUERY } from "@/utils/queries";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Professor from "./Professor";
import { FilterBar } from "./FilterBar";
import { PaginationControls } from "./PaginationControls";
import { usePaginatedFilter } from "@/hooks/usePaginatedFilter";

const PAGE_SIZE = 12;

export const ProfessorsGrid: React.FC<{
  tags: { name: string }[];
  initProfessors: IProfessor[];
}> = ({ tags = [], initProfessors = [] }) => {
  const area = useSearchParams().get("area");
  const { selectedTags, items, currentPage, setCurrentPage, isLoading, totalPages, paginated, handleTagSelect, handleTagSelectOnly, handleClearTags } =
    usePaginatedFilter(initProfessors, PAGE_SIZE, async (activeTags) => {
      const data = await getContent<{ docentesCollection: { items: IProfessor[] } }>(
        PROFESSORS_FILTERED_QUERY,
        { workingField: activeTags },
      );
      return data.docentesCollection.items;
    });

  useEffect(() => {
    if (area) handleTagSelectOnly(area);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- re-run only when the `area` query param itself changes
  }, [area]);

  return (
    <div className="container">
      <FilterBar
        tags={tags}
        selectedTags={selectedTags}
        onTagSelect={handleTagSelect}
        onClear={handleClearTags}
        count={items.length}
        itemLabel="professor(a)(es/as)"
      />
      <div className="my-6 h-px w-full bg-gray-200" aria-hidden="true" />
      {isLoading ? (
        <p className="py-20 text-center text-gray-500">Carregando...</p>
      ) : paginated.length === 0 ? (
        <p className="py-20 text-center text-gray-500">
          Nenhum professor foi encontrado para os filtros selecionados.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          {paginated.map((prof) => (
            <Professor key={prof.name} professor={prof} onTagSelect={handleTagSelectOnly} />
          ))}
        </div>
      )}
      <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};
