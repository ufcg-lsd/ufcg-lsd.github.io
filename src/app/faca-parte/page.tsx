import { PageFrame } from "@/components/PageFrame";
import { getContent } from "@/utils/contentful";
import { IFacaParte, IPageHeader } from "@/utils/interfaces";
import { FACA_PARTE_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export const revalidate = 60;

export default async function FacaParte() {
  const {
    pageHeaderCollection,
    facaParteCollection,
  }: {
    pageHeaderCollection: { items: IPageHeader[] };
    facaParteCollection: { items: IFacaParte[] };
  } = await getContent(FACA_PARTE_QUERY);

  const pageHeader = pageHeaderCollection.items[0];
  const content = facaParteCollection.items[0];

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

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {content?.thumb && (
            <div className="w-full md:w-1/2 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={content.thumb.url}
                width={content.thumb.width}
                height={content.thumb.height}
                alt="Faça parte"
                className="w-full h-auto object-cover rounded-xl max-h-80"
              />
            </div>
          )}
          {content?.text && (
            <div className="text-gray-700 leading-relaxed text-lg text-justify">
              {documentToReactComponents(content.text.json)}
            </div>
          )}
        </div>
      </div>
    </PageFrame>
  );
}
