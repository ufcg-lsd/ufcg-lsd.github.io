import { IHomePost } from "@/utils/interfaces";
import { getRandomBrandColor } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export const MosaicItem = ({ item }: { item: IHomePost }) => {
  return (
    <div
      className={`group relative flex items-center justify-between flex-1 bg-red-50 rounded-lg overflow-hidden hover:opacity-75 transition-all duration-300`}
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: getRandomBrandColor(),
      }}
    >
      <Link href={item.link || "/"}>
        <Image
          src={item?.post?.url || ""}
          width={item?.post?.width}
          height={item?.post?.height}
          alt={""}
          className="z-0 w-full object-cover"
        />
      </Link>
    </div>
  );
};
