"use client";

import { INavItem } from "@/utils/interfaces";
import Link from "next/link";

export const MobileMenuItem = ({
  item,
  selected,
  onClose,
}: {
  item: INavItem;
  selected: boolean;
  onClose: () => void;
}) => {
  return (
    <Link href={item.link} onClick={onClose}>
      <div className="group relative flex items-center py-3 px-4 text-white hover:bg-white/10 transition-colors duration-200">
        <div className="text-lg z-1">
          {item.text}
        </div>
        <div
          className={`group-hover:w-full absolute left-0 top-0 h-full w-1 transition-all duration-300 z-0 ${
            selected ? "w-2" : "w-0"
          }`}
          style={{ backgroundColor: item.color }}
        />
      </div>
    </Link>
  );
};
