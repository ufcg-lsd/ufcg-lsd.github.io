import { IHomePost } from "@/utils/interfaces";
import { MosaicItem } from "./MosaicItem";

export const Mosaic = ({ posts }: { posts: IHomePost[] }) => {
  const leftItems = posts
    .filter((item) => item.layout == "esquerda" && !item.hero)
    .sort((a, b) => a.priority - b.priority);
  const rightItems = posts
    .filter((item) => item.layout == "direita" && !item.hero)
    .sort((a, b) => a.priority - b.priority);
  const heroItem = posts.filter((item) => item.hero);

  return (
    <div className="max-width my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full rounded-md overflow-hidden">
        {leftItems && (
          <div className="flex flex-col h-full w-full bg-green-300">
            {leftItems.map((item, i) => (
              <MosaicItem key={i} item={item} />
            ))}
          </div>
        )}
        {rightItems && (
          <div className="flex flex-col h-full w-full bg-amber-300">
            {rightItems.map((item, i) => (
              <MosaicItem key={i} item={item} />
            ))}
          </div>
        )}
      </div>
      {heroItem && (
        <div className="h-[300px] md:h-[400px] bg-black">
          <MosaicItem item={heroItem[0]} />
        </div>
      )}
    </div>
  );
};
