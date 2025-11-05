import { INavItem } from "@/utils/interfaces";
import Link from "next/link";

export const HeaderItem = ({
  item,
  selected,
}: {
  item: INavItem;
  selected: boolean;
}) => {
  return (
    <Link href={item.link}>
      <div className="relative group flex flex-col justify-end h-16">
        <div
          className={`${selected && "font-bold"} mb-2 text-white z-1 px-4`}
        >
          {item.text}
        </div>
        <div
          className={`bottom-0  absolute h-2 w-full ${selected ? "h-20" : "group-hover:h-20"} transition-all duration-300 z-0 rounded-t-sm`}
          style={{ backgroundColor: item.color }}
        />
      </div>
    </Link>
  );
};
