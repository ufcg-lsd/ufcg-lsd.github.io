import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { MapPin } from "lucide-react";
import { BannerCarousel } from "@/components/BannerCarousel";
import { IMainBanner, INovidade, IResearchLine } from "@/utils/interfaces";
import { HeroNews } from "./HeroNews";
import { ResearchLines } from "./ResearchLines";

export const Hero = ({
  title,
  text,
  banners,
  news,
  researchLines,
}: {
  title: string;
  text: { json: Document };
  banners: IMainBanner[];
  news: INovidade[];
  researchLines: IResearchLine[];
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col gap-4 lg:w-[62%]">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
          </h1>
          <article className="text-sm md:text-base lg:text-lg text-gray-600 mt-1">
            {documentToReactComponents(text.json)}
          </article>
        </div>
        {banners.length > 0 && <BannerCarousel items={banners} />}
      </div>

      <div className="flex flex-col gap-4 lg:w-[38%]">
        <div className="self-start flex items-center gap-2 rounded-xs w-full bg-[#E2F0EE] text-cyan-800 px-4 py-2 text-sm font-semibold">
          <MapPin size={16} />
          UFCG · CAMPINA GRANDE
        </div>

        {news.length > 0 && <HeroNews items={news} />}

        <ResearchLines lines={researchLines} />
      </div>
    </div>
  );
};
