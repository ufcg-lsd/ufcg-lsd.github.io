import { Suspense } from "react";
import { PageFrame } from "@/components/PageFrame";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { getContent } from "@/utils/contentful";
import { IPageHeader, IPartner, IProject } from "@/utils/interfaces";
import { PROJECTS_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function Projetos() {
  const {
    projectCollection,
    pageHeaderCollection: headers,
    workingFieldsCollection: workingFields,
    parceiroCollection,
  }: {
    projectCollection: { items: IProject[] };
    pageHeaderCollection: { items: IPageHeader[] };
    workingFieldsCollection: { items: { name: string }[] };
    parceiroCollection: { items: IPartner[] };
  } = await getContent(PROJECTS_QUERY);

  const { title, text } = headers.items.find((h) => h.id === "projetos")!;
  const parceirosHeader = headers.items.find((h) => h.id === "parceiros");

  return (
    <PageFrame>
      <div className="flex flex-col gap-5 py-4 px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h1>
          <article className="text-sm md:text-base text-gray-600 mt-1">
            {documentToReactComponents(text.json)}
          </article>
        </div>
        <hr className="border-gray-200" />
        <Suspense
          fallback={
            <p className="py-20 text-center text-gray-500">Carregando...</p>
          }
        >
          <ProjectsGrid
            tags={workingFields.items}
            initProjects={projectCollection.items}
          />
        </Suspense>
        <hr className="border-gray-200" />
        {parceirosHeader && (
          <PartnersCarousel
            partners={parceiroCollection.items || []}
            title={parceirosHeader.title}
            text={parceirosHeader.text}
          />
        )}
      </div>
    </PageFrame>
  );
}
