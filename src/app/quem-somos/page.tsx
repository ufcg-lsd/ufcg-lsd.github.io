import { InfoCard } from "@/components/InfoCard";
import { PageFrame } from "@/components/PageFrame";
import { PhotoGalleryGrid } from "@/components/PhotoGalleryGrid";
import { getContent } from "@/utils/contentful";
import { INavItem, IPageHeader, IPhotoGallery, IValues } from "@/utils/interfaces";
import { QUEM_SOMOS_QUERY } from "@/utils/queries";
import { getRandomBrandColor } from "@/utils/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function QuemSomos() {
  const {
    pageHeaderCollection,
    valuesCollection,
    navItemsCollection,
    pageNavItem,
    photosGalleryCollection,
  }: {
    pageHeaderCollection: { items: IPageHeader[] };
    valuesCollection: { items: IValues[] };
    navItemsCollection: { items: INavItem[] };
    pageNavItem: { items: INavItem[] };
    photosGalleryCollection: { items: IPhotoGallery[] };
  } = await getContent(QUEM_SOMOS_QUERY);

  const { mission, vision, values } = valuesCollection.items[0];
  const colors = navItemsCollection.items.map((i) => i.color);
  const pageColor = pageNavItem.items[0]?.color;
  const pageHeader = pageHeaderCollection.items[0];

  return (
    <PageFrame>
      <div className="flex flex-col gap-6 py-4 px-4">
        <div className="flex flex-col gap-2" style={{ color: pageColor }}>
          <h1 className="text-3xl font-bold">{pageHeader?.title}</h1>
          {pageHeader?.text && documentToReactComponents(pageHeader.text.json)}
      </div>
        <hr className="border-gray-200" />

        <h2 className="text-2xl font-semibold text-gray-800">
          Missão, Visão e Valores
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard icon="eye" title="Visão" color={getRandomBrandColor(colors)}>
            {documentToReactComponents(vision.json)}
          </InfoCard>

          <InfoCard icon="target" title="Missão" color={getRandomBrandColor(colors)}>
            {documentToReactComponents(mission.json)}
          </InfoCard>
        </div>

        <InfoCard icon="star" title="Valores" color={getRandomBrandColor(colors)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
              >
                <span className="mt-0.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                {value}
              </div>
            ))}
          </div>
        </InfoCard>

        <h2 className="text-2xl font-semibold text-gray-800">Galeria de Fotos</h2>
        <PhotoGalleryGrid photos={photosGalleryCollection.items} />
      </div>
    </PageFrame>
  );
}
