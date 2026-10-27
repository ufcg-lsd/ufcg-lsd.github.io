import { FeaturedPublications } from "@/components/FeaturedPublications";
import { PageFrame } from "@/components/PageFrame";
import { getContent } from "@/utils/contentful";
import { IPageHeader, IPublication } from "@/utils/interfaces";
import { PORTFOLIO_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function Portfolio() {
  const {
    pageHeaderCollection,
    publicationsCollection,
  }: {
    pageHeaderCollection: { items: IPageHeader[] };
    publicationsCollection: { items: IPublication[] };
  } = await getContent(PORTFOLIO_QUERY);

  const pageHeader = pageHeaderCollection.items.find(
    (header) => header.id === "portfolio",
  );
  const publicationsHeader = pageHeaderCollection.items.find(
    (header) => header.id === "publicacoes-destaque",
  );

  return (
    <PageFrame>
      <div className="flex flex-col gap-6 py-4 px-4">
        {pageHeader && (
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {pageHeader.title}
            </h1>
            {pageHeader.text && (
              <article className="text-sm md:text-base text-gray-600 mt-1">
                {documentToReactComponents(pageHeader.text.json)}
              </article>
            )}
          </div>
        )}
        <hr className="border-gray-200" />
        {publicationsHeader && (
          <FeaturedPublications
            title={publicationsHeader.title}
            text={publicationsHeader.text}
            publications={publicationsCollection.items}
          />
        )}
      </div>
    </PageFrame>
  );
}
