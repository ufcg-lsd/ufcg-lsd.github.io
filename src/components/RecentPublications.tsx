import { IPublication } from "@/utils/interfaces";
import { PublicationCard } from "./PublicationCard";

export const RecentPublications = ({
  publications,
}: {
  publications: IPublication[];
}) => {
  console.log(publications)
  if (publications.length === 0) return null;


  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
        Publicações Recentes
      </h2>
      <p className="text-xs md:text-md text-gray-600">
        Confira os trabalhos científicos mais recentes produzidos pelos
        pesquisadores do laboratório.
      </p>
      <div>
        {publications.map((publication) => (
          <PublicationCard key={publication.title} publication={publication} />
        ))}
      </div>
    </div>
  );
};
