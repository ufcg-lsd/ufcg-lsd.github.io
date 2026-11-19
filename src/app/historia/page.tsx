import { PageFrame } from "@/components/PageFrame";
import { PhotoGalleryGrid } from "@/components/PhotoGalleryGrid";
import { getContent } from "@/utils/contentful";
import {
  IPageHeader,
  IPhotoGallery,
  IPhotosHistoryDescription,
} from "@/utils/interfaces";
import { HISTORIA_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function Historia() {
  const {
    pageHeaderCollection,
    photosGalleryCollection,
    descriptionPhotosHistoryCollection,
  }: {
    pageHeaderCollection: { items: IPageHeader[] };
    photosGalleryCollection: { items: IPhotoGallery[] };
    descriptionPhotosHistoryCollection: { items: IPhotosHistoryDescription[] };
  } = await getContent(HISTORIA_QUERY);

  const pageHeader = pageHeaderCollection.items.find(
    (header) => header.id === "quem-somos",
  );
  const galleryHeader = descriptionPhotosHistoryCollection?.items?.[0];

  return (
    <PageFrame>
      <div className="flex flex-col gap-6 py-4 px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {pageHeader?.title}
          </h1>
          {pageHeader?.text && (
            <article className="text-sm md:text-base text-gray-600 mt-1">
              {documentToReactComponents(pageHeader.text.json)}
            </article>
          )}
        </div>

        <hr className="border-gray-200" />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            {galleryHeader?.title ?? "Galeria de Fotos"}
          </h2>
          {galleryHeader?.description && (
            <p className="text-sm md:text-base text-gray-600 mt-1 whitespace-pre-line">
              {galleryHeader.description}
            </p>
          )}
        </div>

        <PhotoGalleryGrid photos={photosGalleryCollection.items} />
      </div>
    </PageFrame>
  );
}