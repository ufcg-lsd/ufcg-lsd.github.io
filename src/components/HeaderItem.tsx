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
      <div className="relative group flex flex-col justify-end pt-4">
        <div
          className={`${
            selected ? "font-bold text-black" : "text-gray-500 group-hover:text-gray-800"
          } mb-2 z-1 px-4 transition-colors duration-300`}
        >
          {item.text}
        </div>
        <div
          className="bottom-0 absolute h-0.5 w-full group-hover:h-1.5 transition-all duration-300 z-0"
          style={{ backgroundColor: item.color }}
        />
      </div>
    </Link>
  );
};
