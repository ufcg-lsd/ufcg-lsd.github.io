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
  return (
    <div className="max-w-sm overflow-hidden bg-white font-sans">
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={professor.photo.url}
          width={800}
          height={800}
          alt={professor.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="py-4 flex flex-col gap-2">
        <div>
          <h2 className="text-xl font-bold text-gray-800 p-0">
            {professor.name}
          </h2>
          <p className="text-sm text-gray-400">{professor.role}</p>
        </div>

        <div className="flex items-center gap-2 transition duration-300 text-gray-500">
          {professor.email && (
            <a
              href={`mailto:${professor.email}`}
              className="hover:text-blue-600"
            >
              <Mail size={24} strokeWidth={1.5} />
            </a>
          )}
          {professor.github && (
            <a
              href={professor.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              <Icon id="github" size={20} />
            </a>
          )}
          {professor.lattes && (
            <a
              href={professor.lattes}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              <Icon id="lattes" size={20} />
            </a>
          )}
          {professor.linkedin && (
            <a
              href={professor.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              <Icon id="linkedin" size={20} />
            </a>
          )}
        </div>

        <div
          className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
          style={{
            msOverflowStyle: "none" /* IE and Edge */,
            scrollbarWidth: "none" /* Firefox */,
          }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {professor?.workingFieldsCollection?.items.map((field) => (
            <button
              key={field.name}
              onClick={() => onTagSelect?.(field.name)}
              className="inline-block rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 transition-colors cursor-pointer"
            >
              #{field.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professor;
