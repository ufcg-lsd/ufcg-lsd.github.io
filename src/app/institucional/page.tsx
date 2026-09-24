import { MissionVisionValues } from "@/components/MissionVisionValues";
import { PageFrame } from "@/components/PageFrame";
import { getContent } from "@/utils/contentful";
import { INavItem, IPageHeader, IValues } from "@/utils/interfaces";
import { FACA_PARTE_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function FacaParte() {
  const {
    pageHeaderCollection,
    valuesCollection,
    navItemsCollection,
  }: {
    pageHeaderCollection: { items: IPageHeader[] };
    valuesCollection: { items: IValues[] };
    navItemsCollection: { items: INavItem[] };
  } = await getContent(FACA_PARTE_QUERY);

  const pageHeader = pageHeaderCollection.items[0];
  const { mission, vision, values } = valuesCollection.items[0];
  const colors = navItemsCollection.items.map((i) => i.color);

  return (
    <PageFrame>
      <div className="flex flex-col gap-6 py-4 px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {pageHeader?.title}
          </h1>
          {pageHeader?.text && (
            <article className="text-sm md:text-base text-gray-600 mt-1">
              {documentToReactComponents(pageHeader.text.json)}
            </article>
          )}
        </div>
        <hr className="border-gray-200" />
        <MissionVisionValues
          mission={mission}
          vision={vision}
          values={values}
          colors={colors}
        />
      </div>
    </PageFrame>
  );
}
