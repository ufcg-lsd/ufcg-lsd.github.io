"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { IPartner } from "@/utils/interfaces";
import { PartnerItem } from "./PartnerItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export const PartnersCarousel = ({
  partners,
  title,
  text,
}: {
  partners: IPartner[];
  title: string;
  text: { json: Document };
}) => {
  if (partners.length === 0) return null;

  return (
    <Carousel
      className="flex flex-col gap-6"
      opts={{ align: "start", loop: true }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h2>
          <div className="text-sm text-gray-600 mt-1">
            {documentToReactComponents(text.json)}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <CarouselPrevious className="static size-10 translate-x-0 translate-y-0 rounded-xs cursor-pointer" />
          <CarouselNext className="static size-10 translate-x-0 translate-y-0 rounded-xs bg-cyan-800 text-white hover:border-cyan-800 border-0 hover:border hover:text-cyan-800 hover:bg-white cursor-pointer" />
        </div>
      </div>

      <hr className="border-gray-200" />

      <CarouselContent>
        {partners.map((partner) => (
          <CarouselItem
            key={partner.name}
            className="basis-1/2 sm:basis-1/3 lg:basis-1/5"
          >
            <PartnerItem item={partner} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
