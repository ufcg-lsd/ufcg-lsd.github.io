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
      <div
        className="flex items-center px-6 py-4 text-lg font-bold transition-colors duration-200"
        style={selected ? { color: item.color, backgroundColor: `${item.color}18` } : { color: "#111" }}
      >
        {item.text}
      </div>
    </Link>
  );
};
