import { FacaParteSection } from "@/components/FacaParteSection";
import { Hero } from "@/components/Hero";
import { Mosaic } from "@/components/Mosaic";
import { PageFrame } from "@/components/PageFrame";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { getContent } from "@/utils/contentful";
import {
  IContact,
  IFacaParte,
  IHomePost,
  IMainBanner,
  INovidade,
  IPageHeader,
  IPartner,
  IResearchLine,
  IWorkingFieldWithCounts,
} from "@/utils/interfaces";
import { HOME_QUERY } from "@/utils/queries";

export const revalidate = 60;

const RESEARCH_LINE_COLORS = ["purple", "blue", "magenta", "amber", "rose"];

export default async function Home() {
  const {
    homePostCollection: posts,
    mainBannerCollection: banners,
    pageHeaderCollection: headers,
    workingFieldsCollection: workingFields,
    facaParteCollection,
    contactCollection,
    parceiroCollection,
    newsCollection,
  }: {
    homePostCollection: { items: IHomePost[] };
    mainBannerCollection: { items: IMainBanner[] };
    pageHeaderCollection: { items: IPageHeader[] };
    workingFieldsCollection: { items: IWorkingFieldWithCounts[] };
    facaParteCollection: { items: IFacaParte[] };
    contactCollection: { items: IContact[] };
    parceiroCollection: { items: IPartner[] };
    newsCollection: { items: INovidade[] };
  } = await getContent(HOME_QUERY);

  const { title, text } = headers.items.filter(
    (header) => header.id == "home",
  )[0];

  const presencaOnlineHeader = headers.items.filter(
    (header) => header.id == "presenca-online",
  )[0];

  const facaParteHeader = headers.items.filter(
    (header) => header.id == "faca-parte",
  )[0];

  const parceirosHeader = headers.items.filter(
    (header) => header.id == "parceiros",
  )[0];

  const facaParte = facaParteCollection.items[0];
  const email = contactCollection.items[0]?.link;

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
      <div className="flex flex-col gap-12">
        <Hero
          title={title}
          text={text}
          banners={banners?.items || []}
          news={newsCollection.items || []}
          researchLines={researchLines}
        />
        <Mosaic
          posts={posts.items || []}
          title={presencaOnlineHeader.title}
          text={presencaOnlineHeader.text}
        />
        <FacaParteSection
          title={facaParteHeader?.title}
          text={facaParteHeader?.text}
          facaParte={facaParte}
          email={email}
        />
        <PartnersCarousel
          partners={parceiroCollection.items || []}
          title={parceirosHeader.title}
          text={parceirosHeader.text}
        />
      </div>
    </PageFrame>
  );
}
