import { PageFrame } from "@/components/PageFrame";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { getContent } from "@/utils/contentful";
import { INavItem, IPageHeader, IProject } from "@/utils/interfaces";
import { PROJECTS_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function Projetos() {
  const {
    projectCollection,
    pageHeaderCollection: headers,
    navItemsCollection: navItems,
    workingFieldsCollection: workingFields,
  }: {
    projectCollection: { items: IProject[] };
    navItemsCollection: { items: INavItem[] };
    pageHeaderCollection: { items: IPageHeader[] };
    workingFieldsCollection: { items: { name: string }[] };
  } = await getContent(PROJECTS_QUERY);

  const { title, text } = headers.items[0];

  return (
    <PageFrame>
      <div className="flex flex-col gap-3 py-4 px-4">
        <div
          className="flex flex-col gap-2"
          style={{ color: navItems.items[0].color }}
        >
          <h1 className="text-3xl font-bold">{title}</h1>
          <article>{documentToReactComponents(text.json)}</article>
        </div>
        <ProjectsGrid
          tags={workingFields.items}
          initProjects={projectCollection.items}
        />
      </div>
    </PageFrame>
  );
}
