"use client";

import { IProfessor } from "@/utils/interfaces";
import React, { useState } from "react";
import Professor from "./Professor";
import { FilterBar } from "./FilterBar";
import { getContent } from "@/utils/contentful";
import { PROFESSOR_QUERY } from "@/utils/queries";
import { Icon } from "./Icon";

export const ProfessorGrid: React.FC<{
  tags: { name: string }[];
  initProfessors: IProfessor[];
}> = ({ tags = [], initProfessors = [] }) => {
  const [professors, setProfessors] = useState<IProfessor[]>(initProfessors);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // Array state

  const handleUpdate = async (tagName: string) => {
    setIsLoading(true);
    try {
      const nextTags = selectedTags.includes(tagName)
        ? selectedTags.filter((t) => t !== tagName)
        : [...selectedTags, tagName];
      setSelectedTags(nextTags);
      console.log(nextTags);

      const variables = !!nextTags.length ? { workingField: nextTags } : {};

      const data = await getContent<{ docentesCollection: { items: any[] } }>(
        PROFESSOR_QUERY,
        variables,
      );

      const mappedProfessors: IProfessor[] = data.docentesCollection.items.map(
        (item) => ({
          ...item,
          workingFields: item.workingFieldsCollection.items,
        }),
      );

      console.log(mappedProfessors);

      setProfessors(mappedProfessors);
    } catch (error) {
      console.error("Failed to fetch professors:", error);
    } finally {
      setTimeout(
        () =>
          setIsLoading(false)
        , 300
      );
    }
  };

  return (
    <div className="container">
      <FilterBar
        tags={tags}
        selectedTags={selectedTags}
        onTagSelect={handleUpdate}
      />
      <div className="my-6 h-px w-full bg-gray-200" aria-hidden="true" />
      {isLoading ? (
        <p className="flex flex-col items-center gap-4 py-20 text-center text-gray-500">
          <Icon id="load"  className="animate-spin" size={24} />
          Carregando professores...
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {professors.map((prof, index) => (
              <Professor key={index} professor={prof} />
            ))}
          </div>

          {professors.length === 0 && (
            <p className="py-20 text-center text-gray-500">
              Nenhum professor foi encontrado para os filtros selecionados.
            </p>
          )}
        </>
      )}
    </div>
  );
};
