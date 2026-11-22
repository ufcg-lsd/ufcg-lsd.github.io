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
import { BLOCKS } from "@contentful/rich-text-types";
import React from "react";

export const revalidate = 60;

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: unknown, children: React.ReactNode) => (
      <p style={{ marginBottom: "1.25rem", lineHeight: "1.65" }}>{children}</p>
    ),
  },
  renderText: (text: string) => {
    return text.split("\n").reduce((children: React.ReactNode[], textSegment, index) => {
      return [
        ...children,
        index > 0 && <span key={index} style={{ display: "block", marginTop: "1rem" }} />,
        textSegment,
      ];
    }, []);
  },
};

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
              {documentToReactComponents(pageHeader.text.json, richTextOptions)}
            </article>
          )}
        </div>

        <hr className="border-gray-200" />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            {galleryHeader?.title ?? "Galeria de Fotos"}
          </h2>
          {galleryHeader?.description && (
            <div className="flex flex-col gap-3 text-sm md:text-base text-gray-600 mt-1">
              {galleryHeader.description
                .split(/\r?\n/)
                .filter((paragraph) => paragraph.trim() !== "")
                .map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
            </div>
          )}
        </div>

        <PhotoGalleryGrid photos={photosGalleryCollection.items} />
      </div>
    </PageFrame>
  );
}