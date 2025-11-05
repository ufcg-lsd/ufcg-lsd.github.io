"use client";

import { INavItem } from "@/utils/interfaces";
import Image from "next/image";
import { HeaderItem } from "./HeaderItem";
import { usePathname } from "next/navigation";

export const Header = ({ items }: { items: INavItem[] }) => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between w-full bg-black/30 px-12">
      <Image
        src={"/short-logo.png"}
        width={200}
        height={100}
        className="w-20 h-fit"
        alt="LSD logo with the characters combining as one big logo"
      />
      <div className="flex">
        {items.sort((a, b) => a.order - b.order).map((item, i) => (
          <HeaderItem item={item} key={i} selected={pathname === item.link} />
        ))}
      </div>
    </div>
  );
};
