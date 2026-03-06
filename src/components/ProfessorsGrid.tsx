"use client";

import { IProfessor } from "@/utils/interfaces";
import React, { useState } from "react";
import Professor from "./Professor";
import { FilterBar } from "./FilterBar";

const PAGE_SIZE = 12;

export const ProfessorGrid: React.FC<{
  tags: { name: string }[];
  initProfessors: IProfessor[];
}> = ({ tags = [], initProfessors = [] }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleUpdate = (tagName: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagName) ? prev.filter((t) => t !== tagName) : [...prev, tagName],
    );
    setCurrentPage(0);
  };

  const filtered =
    selectedTags.length === 0
      ? initProfessors
      : initProfessors.filter((prof) =>
          selectedTags.some((tag) =>
            prof.workingFieldsCollection.items.some((f) => f.name === tag),
          ),
        );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const professors = filtered.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

  return (
    <div className="container">
      <FilterBar
        tags={tags}
        selectedTags={selectedTags}
        onTagSelect={handleUpdate}
      />
      <div className="my-6 h-px w-full bg-gray-200" aria-hidden="true" />
      {professors.length === 0 ? (
        <p className="py-20 text-center text-gray-500">
          Nenhum professor foi encontrado para os filtros selecionados.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {professors.map((prof) => (
            <Professor key={prof.name} professor={prof} />
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
