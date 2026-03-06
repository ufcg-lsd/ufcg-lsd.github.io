"use client";

import { IProject } from "@/utils/interfaces";
import { getContent } from "@/utils/contentful";
import { PROJECT_QUERY } from "@/utils/queries";
import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { FilterBar } from "./FilterBar";

const PAGE_SIZE = 9;

export const ProjectsGrid: React.FC<{
  tags: { name: string }[];
  initProjects: IProject[];
}> = ({ tags = [], initProjects = [] }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [projects, setProjects] = useState<IProject[]>(initProjects);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (tagName: string) => {
    const next = selectedTags.includes(tagName)
      ? selectedTags.filter((t) => t !== tagName)
      : [...selectedTags, tagName];
    setSelectedTags(next);
    setCurrentPage(0);

    if (next.length === 0) {
      setProjects(initProjects);
    } else {
      setIsLoading(true);
      const data = await getContent<{ projectCollection: { items: IProject[] } }>(
        PROJECT_QUERY,
        { actionField: next },
      );
      setProjects(data.projectCollection.items);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsLoading(false);
    }
  };

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const paginated = projects.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

  return (
    <div>
      <FilterBar
        tags={tags}
        selectedTags={selectedTags}
        onTagSelect={handleUpdate}
      />
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
      {totalPages > 1 && (
        <div className="mt-8 flex justify-between text-sm text-gray-600">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 0}
            className="flex items-center gap-1 disabled:opacity-30 hover:text-gray-900 cursor-pointer transition-colors"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage >= totalPages - 1}
            className="flex items-center gap-1 disabled:opacity-30 hover:text-gray-900 cursor-pointer transition-colors"
          >
            Próximo →
          </button>
        </div>
      )}
    </div>
  );
};
