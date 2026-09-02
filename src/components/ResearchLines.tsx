import Link from "next/link";
import { IResearchLine } from "@/utils/interfaces";

const COLOR_CLASSES: Record<string, string> = {
  purple: "bg-purple-standard",
  blue: "bg-blue-standard",
  magenta: "bg-magenta-standard",
  amber: "bg-amber-standard",
  rose: "bg-rose-standard",
};

export const ResearchLines = ({ lines }: { lines: IResearchLine[] }) => {
  if (lines.length === 0) return null;

  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xs font-semibold text-gray-500 uppercase">
        Nossas linhas de pesquisa
      </h2>
      <div className="flex flex-col">
        {lines.map((line) => (
          <div
            key={line.name}
            className="flex items-center justify-between gap-3 py-3 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-1 self-stretch rounded-full ${
                  COLOR_CLASSES[line.color] ?? "bg-gray-400"
                }`}
              />
              <span className="font-semibold text-gray-900 text-sm">
                {line.name}
              </span>
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap shrink-0">
              <Link
                href={`/projetos?area=${encodeURIComponent(line.name)}`}
                className="hover:text-gray-900 hover:underline"
              >
                {line.projects} projetos
              </Link>
              {" · "}
              <Link
                href={`/professores?area=${encodeURIComponent(line.name)}`}
                className="hover:text-gray-900 hover:underline"
              >
                {line.professors} professores
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
