import { ArrowRight } from "lucide-react";
import { INovidade } from "@/utils/interfaces";

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  if (!dateStr || Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Fortaleza",
  }).format(date);
};

const NewsCard = ({ item }: { item: INovidade }) => {
  const formattedDate = formatDate(item.date);
  const card = (
    <div className="flex items-start justify-between gap-3 rounded-xs border-l-4 border-cyan-standard px-4 py-3">
      <div className="min-w-0">
        <p className="text-[11px] font-semibold text-cyan-700">
          {item.label}
        </p>
        <p className="font-bold leading-snug text-gray-900">
          {item.title}
        </p>
        {item.description && (
          <p className="mt-1 text-sm leading-relaxed text-gray-600">
            {item.description}
          </p>
        )}
        {formattedDate && (
          <p className="mt-1 text-xs text-gray-500">
            Publicado em {formattedDate}
          </p>
        )}
      </div>
      <ArrowRight size={20} className="mt-1 shrink-0 text-cyan-700" />
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
  const latestItems = items.slice(0, 2);
  if (latestItems.length === 0) return null;

  return (
    <section className="flex flex-col gap-3 rounded-xs border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500 uppercase">novidades</span>
      </div>
      <div className="flex flex-col gap-2">
        {latestItems.map((item) => (
          <div key={`${item.title}-${item.date}`}>
            <NewsCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};
