import { IPublication } from "@/utils/interfaces";
import { ExternalLink } from "lucide-react";

const getYear = (dateStr: string) => new Date(dateStr).getFullYear();

export const PublicationCard = ({ publication }: { publication: IPublication }) => {
  return (
    <div className="py-4 border-b border-gray-200 last:border-b-0">
      <div className="flex w-full flex-wrap items-start justify-between gap-x-2 gap-y-1">
        {publication.link ? (
          <a
            href={publication.link}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-gray-900 hover:underline flex items-center gap-1"
          >
            {publication.title}
            <ExternalLink size={14} className="shrink-0" />
          </a>
        ) : (
          <span className="font-bold text-gray-900">{publication.title}</span>
        )}
        <span className="text-sm text-gray-500 shrink-0">
          {getYear(publication.date)}
        </span>
      </div>
      <p className="text-sm text-gray-600">{publication.authors}</p>
      <p className="text-sm italic text-gray-500">{publication.venue}</p>
      {publication.field && (
        <span className="mt-2 inline-block rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700">
          #{publication.field}
        </span>
      )}
    </div>
  );
};
