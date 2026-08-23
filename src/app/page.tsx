import { BannerCarousel } from "@/components/BannerCarousel";
import { Mosaic } from "@/components/Mosaic";
import { PageFrame } from "@/components/PageFrame";
import { RecentPublications } from "@/components/RecentPublications";
import { getContent } from "@/utils/contentful";
import {
  IHomePost,
  IMainBanner,
  IPageHeader,
  IPublication,
} from "@/utils/interfaces";
import { HOME_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export const revalidate = 60;

export default async function Home() {
  const {
    homePostCollection: posts,
    mainBannerCollection: banners,
    pageHeaderCollection: headers,
    // publicationCollection: publications,
  }: {
    homePostCollection: { items: IHomePost[] };
    mainBannerCollection: { items: IMainBanner[] };
    pageHeaderCollection: { items: IPageHeader[] };
    // publicationCollection: { items: IPublication[] };
  } = await getContent(HOME_QUERY);

  const { title, text } = headers.items.filter(
    (header) => header.id == "home",
  )[0];

  const publications = {
    items: [
      {
        title: "Fault-Tolerant Consensus in Large-Scale Distributed Systems",
        authors: "A. Silva, B. Souza, C. Lima",
        venue: "IEEE INFOCOM 2026",
        field: "Sistemas Distribuídos",
        link: "https://doi.org/10.1109/INFOCOM.2026.0001",
        date: "2026-04-15",
      },
      {
        title: "Energy-Aware Task Scheduling for Edge Computing Environments",
        authors: "D. Oliveira, E. Costa",
        venue: "ACM Transactions on Autonomous and Adaptive Systems",
        field: "Computação em Nuvem",
        link: "https://doi.org/10.1145/TAAS.2026.0002",
        date: "2026-02-10",
      },
      {
        title: "A Survey on Byzantine Fault Tolerance for Blockchain Networks",
        authors: "F. Pereira, G. Almeida, H. Rocha",
        venue: "Journal of Parallel and Distributed Computing",
        field: "Blockchain",
        link: "https://doi.org/10.1016/JPDC.2025.0003",
        date: "2025-11-20",
      },
      {
        title: "Adaptive Load Balancing in Microservice Architectures",
        authors: "I. Santos, J. Ferreira",
        venue: "Simpósio Brasileiro de Redes de Computadores (SBRC) 2025",
        field: "Redes de Computadores",
        link: "https://doi.org/10.5753/SBRC.2025.0004",
        date: "2025-06-05",
      },
      {
        title: "Privacy-Preserving Data Aggregation for IoT Networks",
        authors: "K. Nascimento, L. Barbosa, M. Cardoso",
        venue: "IEEE Transactions on Dependable and Secure Computing",
        field: "Segurança da Informação",
        link: "https://doi.org/10.1109/TDSC.2025.0005",
        date: "2025-03-18",
      },
    ],
  };

  return (
    <PageFrame>
      <div className="flex flex-col gap-4">
        <BannerCarousel items={banners?.items || []} />
        <div className="flex lg:flex-row gap-4 h-full justify-between items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold w-fit text-center">
              {title}
            </h1>
            <article className="text-sm lg:text-lg text-start ">
              {documentToReactComponents(text.json)}
            </article>
          </div>
          <Image
            className="hidden lg:block w-full max-w-32 md:max-w-60 h-fit"
            src="lsd.png"
            alt=""
            height={200}
            width={250}
          />
        </div>
        <Mosaic posts={posts.items || []} />
        <RecentPublications publications={publications?.items || []} />
      </div>
    </PageFrame>
  );
}
