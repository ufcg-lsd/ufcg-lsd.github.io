"use client";

import { IProject } from "@/utils/interfaces";
import { getContent } from "@/utils/contentful";
import { PROJECTS_FILTERED_QUERY } from "@/utils/queries";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { FilterBar } from "./FilterBar";
import { PaginationControls } from "./PaginationControls";
import { usePaginatedFilter } from "@/hooks/usePaginatedFilter";

const PAGE_SIZE = 9;

export const ProjectsGrid: React.FC<{
  tags: { name: string }[];
  initProjects: IProject[];
}> = ({ tags = [], initProjects = [] }) => {
  const { selectedTags, currentPage, setCurrentPage, isLoading, totalPages, paginated, handleTagSelect } =
    usePaginatedFilter(initProjects, PAGE_SIZE, async (activeTags) => {
      const data = await getContent<{ projectCollection: { items: IProject[] } }>(
        PROJECTS_FILTERED_QUERY,
        { actionField: activeTags },
      );
      return data.projectCollection.items;
    });

  return (
    <div>
      <FilterBar tags={tags} selectedTags={selectedTags} onTagSelect={handleTagSelect} />
      <div className="my-6 h-px w-full bg-gray-200" aria-hidden="true" />
      {isLoading ? (
        <p className="py-20 text-center text-gray-500">Carregando...</p>
      ) : paginated.length === 0 ? (
        <p className="py-20 text-center text-gray-500">
          Nenhum projeto foi encontrado para os filtros selecionados.
        </p>
      ) : (
        <div>
          {paginated.map((proj) => (
            <ProjectCard key={proj.name} project={proj} />
          ))}
        </div>
      )}
      <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};
