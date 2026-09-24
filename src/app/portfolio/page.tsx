import { FeaturedPublications } from "@/components/FeaturedPublications";
import { PageFrame } from "@/components/PageFrame";
import { getContent } from "@/utils/contentful";
import { IPageHeader, IPublication } from "@/utils/interfaces";
import { PORTFOLIO_QUERY } from "@/utils/queries";

export const revalidate = 60;

export default async function Portfolio() {
  const {
    pageHeaderCollection,
    publicationsCollection,
  }: {
    pageHeaderCollection: { items: IPageHeader[] };
    publicationsCollection: { items: IPublication[] };
  } = await getContent(PORTFOLIO_QUERY);

  const publicationsHeader = pageHeaderCollection.items[0];

  return (
    <PageFrame>
      <div className="flex flex-col gap-6 py-4 px-4">
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
