"use client";

import { IHomePost } from "@/utils/interfaces";
import { MosaicItem } from "./MosaicItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export const Mosaic = ({ posts }: { posts: IHomePost[] }) => {
  return (
    <Carousel className="w-full" opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <MosaicItem item={post} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};
