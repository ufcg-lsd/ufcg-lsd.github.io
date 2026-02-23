"use client";

import { INavItem } from "@/utils/interfaces";
import Image from "next/image";
import { HeaderItem } from "./HeaderItem";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { Icon } from "./Icon";
import { background } from "storybook/theming";

export const Header = ({ items }: { items: INavItem[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div
      className="flex justify-center w-full "
      style={{
        backgroundColor: items.filter((item) => pathname === item.link)[0]
          .color,
      }}
    >
      <div className="flex items-center justify-between max-width min-h-16 bg-black/30">
        <Image
          src={"/short-logo.png"}
          width={200}
          height={100}
          className="w-10 md:w-20 h-fit"
          alt="LSD logo with the characters combining as one big logo"
        />
        <div className="hidden md:flex">
          {items
            .sort((a, b) => a.order - b.order)
            .map((item, i) => (
              <HeaderItem
                item={item}
                key={i}
                selected={pathname === item.link}
              />
            ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white cursor-pointer transition-all duration-300 hover:opacity-75"
          >
            <Icon id="menu" size={24} />
          </button>
        </div>

        <MobileMenu
          items={items}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </div>
  );
};
