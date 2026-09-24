import { PageFrame } from "@/components/PageFrame";
import { PhotoGalleryGrid } from "@/components/PhotoGalleryGrid";
import { getContent } from "@/utils/contentful";
import { IPageHeader, IPhotoGallery } from "@/utils/interfaces";
import { QUEM_SOMOS_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function QuemSomos() {
  const {
    pageHeaderCollection,
    photosGalleryCollection,
  }: {
    pageHeaderCollection: { items: IPageHeader[] };
    photosGalleryCollection: { items: IPhotoGallery[] };
  } = await getContent(QUEM_SOMOS_QUERY);

  const pageHeader = pageHeaderCollection.items.find(
    (header) => header.id === "quem-somos",
  );

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

        <h2 className="text-2xl font-semibold text-gray-800">Galeria de Fotos</h2>
        <PhotoGalleryGrid photos={photosGalleryCollection.items} />
      </div>
    </PageFrame>
  );
}
