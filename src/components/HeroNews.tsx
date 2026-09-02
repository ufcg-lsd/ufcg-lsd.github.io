"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { INovidade } from "@/utils/interfaces";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const formatDate = (dateStr: string) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));

const NewsCard = ({ item }: { item: INovidade }) => {
  const card = (
    <div className="flex items-center justify-between gap-3 rounded-xs border-l-4 border-cyan-standard px-4 py-3">
      <div className="min-w-0">
        <p className="text-[11px] font-semibold text-cyan-700">
          {item.label}
        </p>
        <p className="truncate font-bold text-gray-900" title={item.title}>
          {item.title}
        </p>
        <p className="text-xs text-gray-500">
          Publicado em {formatDate(item.date)}
        </p>
      </div>
      <ArrowRight size={20} className="shrink-0 text-cyan-700" />
    </div>
  );

  return item.link ? (
    <a href={item.link} className="block hover:opacity-90">
      {card}
    </a>
  ) : (
    card
  );
};

export const HeroNews = ({ items }: { items: INovidade[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initializes index state from embla's synchronous API on mount
    setIndex(api.selectedScrollSnap());
    api.on("select", () => setIndex(api.selectedScrollSnap()));
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      className="rounded-sm border border-gray-200 shadow-sm p-4 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500 uppercase">novidades</span>
        {items.length > 1 && (
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-xs">
              {index + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Novidade anterior"
              className="rounded-sm border border-gray-200 p-1 hover:bg-gray-100"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Próxima novidade"
              className="rounded-sm border border-gray-200 p-1 hover:bg-gray-100"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
      <CarouselContent className="ml-0">
        {items.map((item) => (
          <CarouselItem key={item.title} className="pl-0">
            <NewsCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
