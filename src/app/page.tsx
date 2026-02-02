import { BannerCarousel } from "@/components/BannerCarousel";
import { Mosaic } from "@/components/Mosaic";
import { PageFrame } from "@/components/PageFrame";
import { getContent } from "@/utils/contentful";
import { IHomePost, IMainBanner, IPageHeader } from "@/utils/interfaces";
import { HOME_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export const revalidate = 60;

export default async function Home() {
  const {
    homePostCollection: posts,
    mainBannerCollection: banners,
    pageHeaderCollection: headers,
  }: {
    homePostCollection: { items: IHomePost[] };
    mainBannerCollection: { items: IMainBanner[] };
    pageHeaderCollection: { items: IPageHeader[] };
  } = await getContent(HOME_QUERY);

  const { title, text } = headers.items.filter(
    (header) => header.id == "home",
  )[0];

  return (
    <PageFrame background="var(--color-cyan-standard)">
      <div className="flex flex-col gap-4">
        <BannerCarousel items={banners?.items || []} />
        <div className="flex flex-col-reverse lg:flex-row gap-4 h-full justify-between items-center">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl lg:text-4xl font-bold w-fit text-center">{title}</h1>
            <article className="text-md lg:text-lg text-center lg:text-start ">
              {documentToReactComponents(text.json)}
            </article>
          </div>
          <Image
            className="hidden lg:block w-full max-w-60 h-fit"
            src="lsd.png"
            alt=""
            height={200}
            width={250}
          />
        </div>
        <Mosaic posts={posts.items || []} />
      </div>
    </PageFrame>
  );
}
