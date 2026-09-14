"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { IHomePost } from "@/utils/interfaces";
import { MosaicItem } from "./MosaicItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export const Mosaic = ({
  posts,
  title,
  text,
}: {
  posts: IHomePost[];
  title: string;
  text: { json: Document };
}) => {
  if (posts.length === 0) return null;

  return (
    <Carousel className="w-full" opts={{ align: "start", loop: true }}>
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex flex-col gap-4 md:w-50 lg:w-64 shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {title}
            </h2>
            <div className="text-sm text-gray-600 mt-1">
              {documentToReactComponents(text.json)}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <CarouselPrevious className="static size-10 translate-x-0 translate-y-0 rounded-xs cursor-pointer" />
            <CarouselNext className="static size-10 translate-x-0 translate-y-0 rounded-xs bg-cyan-800 text-white hover:border-cyan-800 border-0 hover:border hover:text-cyan-800 hover:bg-white cursor-pointer" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <CarouselContent>
            {posts.map((post) => (
              <CarouselItem
                key={post.id}
                className="basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <MosaicItem item={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </div>
    </Carousel>
  );
};
