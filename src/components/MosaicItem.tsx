import { IHomePost } from "@/utils/interfaces";
import { getStableBrandColor } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export const MosaicItem = ({ item }: { item: IHomePost }) => {
  return (
    <div
      className="group relative aspect-5/3 flex items-center justify-between rounded-xs overflow-hidden hover:opacity-75 transition-all duration-300"
      style={{
        backgroundColor: item.backgroundColor || getStableBrandColor(item.id),
      }}
    >
      <Link href={item.link || "/"} className="relative block w-full h-full">
        <Image
          src={item?.post?.url || ""}
          alt={item.id}
          fill
          className="z-10 object-contain"
        />
      </Link>
    </div>
  );
};
