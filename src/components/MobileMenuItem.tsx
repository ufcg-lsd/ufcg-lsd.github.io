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
      <div className="flex flex-col mx-4">
        <div
          className={`px-6 py-4 text-lg transition-colors duration-200 ${
            selected ? "font-bold text-black" : "font-normal text-gray-500"
          }`}
        >
          {item.text}
        </div>
        <div className="h-0.5 w-full" style={{ backgroundColor: item.color }} />
      </div>
    </Link>
  );
};
