import { IProject } from "@/utils/interfaces";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ExternalLink } from "lucide-react";

const getYear = (dateStr: string) => new Date(dateStr).getFullYear();

export const ProjectCard = ({ project }: { project: IProject }) => {
  const endLabel = project.endDate ? getYear(project.endDate) : "Atual";

  return (
    <div className="py-6 border-b border-gray-200 hover:bg-gray-100 rounded-lg p-4 transition duration-300 slast:border-b-0">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
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
          {project.leader && (
            <span className="text-gray-600 text-sm">
              Coordenado por: <strong>{project.leader.name}</strong>
            </span>
          )}
        </div>
        <span className="text-sm text-gray-500 shrink-0">
          {getYear(project.initDate)} - {endLabel}
        </span>
      </div>

      <div className="mt-2 text-sm text-gray-700">
        {documentToReactComponents(project.description.json)}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.actionFieldsCollection.items.map((field) => (
            <span
              key={field.name}
              className="inline-block rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700"
            >
              #{field.name}
            </span>
          ))}
        </div>
        {(project.graduates != null || project.underGraduates != null) && (
          <span className="text-sm text-gray-600 shrink-0">
            {project.graduates != null && <><strong>{project.graduates}</strong> Graduados</>}
            {project.graduates != null && project.underGraduates != null && ", "}
            {project.underGraduates != null && <><strong>{project.underGraduates}</strong> Alunos</>}
          </span>
        )}
      </div>
    </div>
  );
};
