import { IPublication } from "@/utils/interfaces";
import { PublicationCard } from "./PublicationCard";

export const RecentPublications = ({
  publications,
}: {
  publications: IPublication[];
}) => {
  if (publications.length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold text-gray-800">
        Publicações Recentes
      </h2>
      <div>
        {publications.map((publication) => (
          <PublicationCard key={publication.title} publication={publication} />
        ))}
      </div>
    </div>
  );
};
