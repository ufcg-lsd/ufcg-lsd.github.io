import { Hero } from "@/components/Hero";
import { Mosaic } from "@/components/Mosaic";
import { PageFrame } from "@/components/PageFrame";
import { RecentPublications } from "@/components/RecentPublications";
import { getContent } from "@/utils/contentful";
import {
  IHomePost,
  IMainBanner,
  INovidade,
  IPageHeader,
  IPublication,
  IResearchLine,
  IWorkingFieldWithCounts,
} from "@/utils/interfaces";
import { HOME_QUERY } from "@/utils/queries";

export const revalidate = 60;

const news: INovidade[] = [
  {
    label: "ÚLTIMO POST NO PENSADOURO LSD",
    title: "Título do post mais recente",
    date: "2026-08-20",
    link: "#",
  },
  {
    label: "NOVO PROJETO APROVADO",
    title: "LSD conquista financiamento para pesquisa em IA distribuída",
    date: "2026-08-10",
    link: "#",
  },
  {
    label: "EVENTO",
    title: "LSD sedia workshop de Computação em Nuvem",
    date: "2026-07-28",
    link: "#",
  },
];

const RESEARCH_LINE_COLORS = ["purple", "blue", "magenta", "amber", "rose"];

export default async function Home() {
  const {
    homePostCollection: posts,
    mainBannerCollection: banners,
    pageHeaderCollection: headers,
    publicationsCollection: publications,
    workingFieldsCollection: workingFields,
  }: {
    homePostCollection: { items: IHomePost[] };
    mainBannerCollection: { items: IMainBanner[] };
    pageHeaderCollection: { items: IPageHeader[] };
    publicationsCollection: { items: IPublication[] };
    workingFieldsCollection: { items: IWorkingFieldWithCounts[] };
  } = await getContent(HOME_QUERY);

  const { title, text } = headers.items.filter(
    (header) => header.id == "home",
  )[0];

  const researchLines: IResearchLine[] = (workingFields?.items || []).map(
    (field, index) => ({
      name: field.name,
      color: RESEARCH_LINE_COLORS[index % RESEARCH_LINE_COLORS.length],
      projects: field.linkedFrom.projectCollection.total,
      professors: field.linkedFrom.docentesCollection.total,
    }),
  );

  return (
    <PageFrame>
      <div className="flex flex-col gap-4">
        <Hero
          title={title}
          text={text}
          banners={banners?.items || []}
          news={news}
          researchLines={researchLines}
        />
        <Mosaic posts={posts.items || []} />
        <RecentPublications publications={publications?.items || []} />
      </div>
    </PageFrame>
  );
}
