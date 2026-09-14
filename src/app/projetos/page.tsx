import { Suspense } from "react";
import { PageFrame } from "@/components/PageFrame";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { getContent } from "@/utils/contentful";
import { IPageHeader, IProject } from "@/utils/interfaces";
import { PROJECTS_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function Projetos() {
  const {
    projectCollection,
    pageHeaderCollection: headers,
    workingFieldsCollection: workingFields,
  }: {
    projectCollection: { items: IProject[] };
    pageHeaderCollection: { items: IPageHeader[] };
    workingFieldsCollection: { items: { name: string }[] };
  } = await getContent(PROJECTS_QUERY);

  const { title, text } = headers.items[0];

  return (
    <PageFrame>
      <div className="flex flex-col gap-3 py-4 px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
          </h1>
          <article className="text-sm md:text-base lg:text-lg text-gray-600 mt-1">
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
      </div>
    </PageFrame>
  );
}
