import { IHomePost } from "@/utils/interfaces";
import { isColorLight } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export const MosaicItem = ({ item }: { item: IHomePost }) => {
  return (
    <div
      className="group relative flex items-center justify-between min-h-[250px] h-full flex-1 "
      style={{ backgroundColor: item.background || "white" }}
    >
      <p
        className={`z-2 py-8 px-12 text-2xl md:text-3xl font-bold ${
          (!item.background || isColorLight(item.background)) && !item.thumb
            ? "text-purple-600"
            : "text-white"
        }`}
      >
        {item.text}
      </p>

      {item.thumb && (
        <>
          <Image
            src={item.thumb.url}
            width={400}
            height={200}
            alt={""}
            className="z-0 absolute w-full h-full object-cover"
          />
          <div className="z-1 absolute w-full h-full bg-black/30" />
        </>
      )}
      {item.link && (
        <Link
          href={item.link}
          className="z-2 absolute w-full h-full group-hover:bg-black/20 transition-all duration-300"
        />
      )}
    </div>
  );
};
