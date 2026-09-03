import { IProject } from "@/utils/interfaces";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ExternalLink } from "lucide-react";

const getYear = (dateStr: string) => new Date(dateStr).getFullYear();

export const ProjectCard = ({
  project,
  onTagSelect,
}: {
  project: IProject;
  onTagSelect?: (tag: string) => void;
}) => {
  const endLabel = project.endDate ? getYear(project.endDate) : "Atual";

  return (
    <div className="py-6 border-b border-gray-200 hover:bg-gray-100 rounded-xs p-4 transition duration-300 slast:border-b-0">
      <div className="flex w-full flex-wrap items-start justify-between gap-x-2 gap-y-1">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-gray-900 hover:underline flex items-center gap-1"
          >
            {project.name}
            <ExternalLink size={14} className="shrink-0" />
          </a>
        ) : (
          <span className="font-bold text-gray-900">{project.name}</span>
        )}
        <span className="text-sm text-gray-500 shrink-0">
          {getYear(project.initDate)} - {endLabel}
        </span>
      </div>
      {project.leader && (
        <span className="text-gray-600 text-sm">
          Coordenado por: <strong>{project.leader.name}</strong>
        </span>
      )}

      <div className="mt-2 text-sm text-gray-700">
        {documentToReactComponents(project.description.json)}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.actionFieldsCollection.items.map((field) => (
            <button
              key={field.name}
              onClick={() => onTagSelect?.(field.name)}
              className="inline-block rounded-xs border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              #{field.name}
            </button>
          ))}
        </div>
        {(project.graduates != null || project.underGraduates != null) && (
          <span className="text-sm text-gray-600 shrink-0">
            {project.graduates != null && (
              <>
                <strong>{project.graduates}</strong> Graduados
              </>
            )}
            {project.graduates != null &&
              project.underGraduates != null &&
              ", "}
            {project.underGraduates != null && (
              <>
                <strong>{project.underGraduates}</strong> Alunos
              </>
            )}
          </span>
        )}
      </div>
    </div>
  );
};
