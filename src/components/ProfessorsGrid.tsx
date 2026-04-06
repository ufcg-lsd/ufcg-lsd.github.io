"use client";

import { IProfessor } from "@/utils/interfaces";
import { getContent } from "@/utils/contentful";
import { PROFESSORS_FILTERED_QUERY } from "@/utils/queries";
import React from "react";
import Professor from "./Professor";
import { FilterBar } from "./FilterBar";
import { PaginationControls } from "./PaginationControls";
import { usePaginatedFilter } from "@/hooks/usePaginatedFilter";

const PAGE_SIZE = 12;

export const ProfessorsGrid: React.FC<{
  tags: { name: string }[];
  initProfessors: IProfessor[];
}> = ({ tags = [], initProfessors = [] }) => {
  const { selectedTags, currentPage, setCurrentPage, isLoading, totalPages, paginated, handleTagSelect } =
    usePaginatedFilter(initProfessors, PAGE_SIZE, async (activeTags) => {
      const data = await getContent<{ docentesCollection: { items: IProfessor[] } }>(
        PROFESSORS_FILTERED_QUERY,
        { workingField: activeTags },
      );
      return data.docentesCollection.items;
    });

  return (
    <div className="container">
      <FilterBar tags={tags} selectedTags={selectedTags} onTagSelect={handleTagSelect} />
      <div className="my-6 h-px w-full bg-gray-200" aria-hidden="true" />
      {isLoading ? (
        <p className="py-20 text-center text-gray-500">Carregando...</p>
      ) : paginated.length === 0 ? (
        <p className="py-20 text-center text-gray-500">
          Nenhum professor foi encontrado para os filtros selecionados.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {paginated.map((prof) => (
            <Professor key={prof.name} professor={prof} />
          ))}
        </div>
      )}
      <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};
