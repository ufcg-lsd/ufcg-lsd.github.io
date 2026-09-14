import { PageFrame } from "@/components/PageFrame";
import { getContent } from "@/utils/contentful";
import { IFacaParte, IPageHeader } from "@/utils/interfaces";
import { FACA_PARTE_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

const stats = [
  { value: "30 anos", label: "de atuação na UFCG" },
  { value: "5", label: "linhas de pesquisa ativas" },
  { value: "40+", label: "alunos por semestre" },
];

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
            <article className="text-sm md:text-base text-gray-600 mt-1">
              {documentToReactComponents(pageHeader.text.json)}
            </article>
          )}
        </div>
        <hr className="border-gray-200" />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {content?.thumb ? (
            <div className="w-full md:w-1/2 shrink-0 overflow-hidden rounded-xs">
              <Image
                src={content.thumb.url}
                width={content.thumb.width}
                height={content.thumb.height}
                alt="Faça parte"
                className="w-full h-auto object-cover rounded-xs max-h-80"
              />
            </div>
          ) : (
            <div className="w-full md:w-1/2 shrink-0 flex items-center justify-center rounded-xs bg-gray-50 min-h-80">
              <span className="text-gray-400">Foto da equipe do LSD</span>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {content?.text && (
              <div className="text-gray-700 leading-relaxed text-justify">
                {documentToReactComponents(content.text.json)}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 rounded-xs border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
              >
                Ver projetos
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xs border border-gray-200 border-t-2 border-t-amber-500 bg-white p-4"
                >
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
