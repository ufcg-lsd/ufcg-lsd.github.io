import { InfoCard } from "@/components/InfoCard";
import { FeaturedPublications } from "@/components/FeaturedPublications";
import { PageFrame } from "@/components/PageFrame";
import { PhotoGalleryGrid } from "@/components/PhotoGalleryGrid";
import { getContent } from "@/utils/contentful";
import {
  INavItem,
  IPageHeader,
  IPhotoGallery,
  IPublication,
  IValues,
} from "@/utils/interfaces";
import { QUEM_SOMOS_QUERY } from "@/utils/queries";
import { getRandomBrandColor } from "@/utils/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function QuemSomos() {
  const {
    pageHeaderCollection,
    valuesCollection,
    navItemsCollection,
    publicationsCollection,
    photosGalleryCollection,
  }: {
    pageHeaderCollection: { items: IPageHeader[] };
    valuesCollection: { items: IValues[] };
    navItemsCollection: { items: INavItem[] };
    publicationsCollection: { items: IPublication[] };
    photosGalleryCollection: { items: IPhotoGallery[] };
  } = await getContent(QUEM_SOMOS_QUERY);

  const { mission, vision, values } = valuesCollection.items[0];
  const colors = navItemsCollection.items.map((i) => i.color);
  const pageHeader = pageHeaderCollection.items.find(
    (header) => header.id === "quem-somos",
  );
  const publicationsHeader = pageHeaderCollection.items.find(
    (header) => header.id === "publicacoes-destaque",
  );
  const visaoColor = getRandomBrandColor(colors);
  const missaoColor = getRandomBrandColor(colors);
  const valoresColor = getRandomBrandColor(colors);

  return (
    <PageFrame>
      <div className="flex flex-col gap-6 py-4 px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {pageHeader?.title}
          </h1>
          {pageHeader?.text && (
            <article className="text-sm md:text-base lg:text-lg text-gray-600 mt-1">
              {documentToReactComponents(pageHeader.text.json)}
            </article>
          )}
      </div>
        <hr className="border-gray-200" />

        <h2 className="text-2xl font-bold text-gray-900">
          Missão, visão e valores
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard icon="eye" title="Visão" color={visaoColor}>
            {documentToReactComponents(vision.json)}
          </InfoCard>

          <InfoCard icon="target" title="Missão" color={missaoColor}>
            {documentToReactComponents(mission.json)}
          </InfoCard>
        </div>

        <InfoCard icon="star" title="Valores" color={valoresColor}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {values.map((value, index) => (
              <div
                key={value}
                className={`flex items-start gap-2 py-3 text-sm text-gray-700 ${
                  index !== values.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: valoresColor }}
                />
                {value}
              </div>
            ))}
          </div>
        </InfoCard>

        {publicationsHeader && (
          <>
            <hr className="border-gray-200" />
            <FeaturedPublications
              title={publicationsHeader.title}
              text={publicationsHeader.text}
              publications={publicationsCollection.items}
            />
          </>
        )}

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-semibold text-gray-800">Galeria de Fotos</h2>
        <PhotoGalleryGrid photos={photosGalleryCollection.items} />
      </div>
    </PageFrame>
  );
}
