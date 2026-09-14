import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ExternalLink } from "lucide-react";
import { IPublication } from "@/utils/interfaces";
import { getStableBrandColor } from "@/utils/utils";

const getYear = (dateStr: string) => new Date(dateStr).getFullYear();

export const FeaturedPublications = ({
  title,
  text,
  publications,
}: {
  title: string;
  text: { json: Document };
  publications: IPublication[];
}) => {
  if (publications.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {text && (
          <article className="text-sm text-gray-600 mt-1">
            {documentToReactComponents(text.json)}
          </article>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
        {publications.map((publication, index) => (
          <div
            key={publication.title}
            className={`py-4 ${
              index !== publications.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
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
                <span className="font-bold text-gray-900">
                  {publication.title}
                </span>
              )}
              <span className="text-sm text-gray-500 shrink-0">
                {getYear(publication.date)}
              </span>
            </div>
            <p className="text-sm text-gray-600">{publication.authors}</p>
            <p className="text-sm italic text-gray-500">
              {publication.venue}
            </p>
            {publication.field && (
              <span
                className="mt-2 inline-block border-l-4 bg-gray-50 pl-2 pr-3 py-1 text-sm font-medium text-gray-700"
                style={{ borderLeftColor: getStableBrandColor(publication.field) }}
              >
                #{publication.field}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
