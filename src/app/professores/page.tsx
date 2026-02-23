import { PageFrame } from "@/components/PageFrame";
import Professor from "@/components/Professor";
import { ProfessorGrid } from "@/components/ProfessorsGrid";
import { getContent } from "@/utils/contentful";
import { INavItem, IPageHeader, IProfessor } from "@/utils/interfaces";
import { PROFESSORS_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function Professores() {
  const {
    pageHeaderCollection: headers,
    navItemsCollection: navItems,
    docentesCollection,
    workingFieldsCollection: workingFields,
  }: {
    docentesCollection: { items: IProfessor[] };
    navItemsCollection: { items: INavItem[] };
    pageHeaderCollection: { items: IPageHeader[] };
    workingFieldsCollection: { items: { name: string }[] };
  } = await getContent(PROFESSORS_QUERY);

  const { title, text } = headers.items[0];
  console.log(workingFields.items);

  return (
    <PageFrame background="var(--color-blue-standard)">
      <div className="flex flex-col gap-3 py-4 px-4">
        <div
          className="flex flex-col gap-2"
          style={{ color: navItems.items[0].color }}
        >
          <h1 className="text-3xl font-bold">{title}</h1>
          <article>{documentToReactComponents(text.json)}</article>
        </div>
        <ProfessorGrid
          tags={workingFields.items}
          initProfessors={docentesCollection.items}
        />
      </div>
    </PageFrame>
  );
}
