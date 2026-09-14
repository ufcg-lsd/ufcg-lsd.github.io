import React from "react";
import { Mail } from "lucide-react";
import { IProfessor } from "@/utils/interfaces";
import { Icon } from "./Icon";
import Image from "next/image";

interface ProfessorCardProps {
  professor: IProfessor;
  onTagSelect?: (tag: string) => void;
}

const Professor: React.FC<ProfessorCardProps> = ({ professor, onTagSelect }) => {
  const fields = professor?.workingFieldsCollection?.items ?? [];
  const [firstField, ...restFields] = fields;

  return (
    <div className="flex items-start gap-3 border-b border-gray-200 py-4">
      <div className="size-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
        <Image
          src={professor.photo.url}
          width={128}
          height={128}
          alt={professor.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div>
          <h2 className="text-md font-bold text-gray-900">{professor.name}</h2>
          <p className="text-sm text-gray-500">{professor.role}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 text-gray-500">
            {professor.email && (
              <a
                href={`mailto:${professor.email}`}
                className="hover:text-blue-600"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            )}
            {professor.github && (
              <a
                href={professor.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <Icon id="github" size={18} />
              </a>
            )}
            {professor.lattes && (
              <a
                href={professor.lattes}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <Icon id="lattes" size={18} />
              </a>
            )}
            {professor.linkedin && (
              <a
                href={professor.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <Icon id="linkedin" size={18} />
              </a>
            )}
          </div>

          {firstField && (
            <>
              <span className="h-4 w-px bg-gray-300" aria-hidden="true" />
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => onTagSelect?.(firstField.name)}
                  className="rounded-xs border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  #{firstField.name}
                </button>
                {restFields.length > 0 && (
                  <span className="rounded-xs border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-500">
                    +{restFields.length}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Professor;
