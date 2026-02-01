"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IMainBanner } from "@/utils/interfaces";
import Image from "next/image";

export function BannerCarousel({ items }: { items: IMainBanner[] }) {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="rounded-lg overflow-hidden max-h-120">
              <Image
                src={item.image.url}
                alt=""
                width={1200}
                height={1200}
                className="w-full object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
