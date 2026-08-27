"use client";

import { INavItem } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import { HeaderItem } from "./HeaderItem";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { Icon } from "./Icon";

export const Header = ({ items }: { items: INavItem[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="relative flex justify-center w-full bg-white border-b border-gray-100">
      <div className="relative flex items-center justify-between px-4 md:px-16 w-full min-h-16 max-w-(--max-width)">
        <Link href="/" className="md:order-2">
          <Image
            src={"/short-logo.png"}
            width={200}
            height={100}
            className="w-10 md:w-20 h-fit brightness-0 opacity-80"
            alt="LSD logo with the characters combining as one big logo"
          />
        </Link>
        <div className="hidden md:flex md:order-1 gap-2">
          {items
            .sort((a, b) => a.order - b.order)
            .map((item) => (
              <HeaderItem
                item={item}
                key={item.id}
                selected={pathname === item.link}
              />
            ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-800 cursor-pointer transition-all duration-300 hover:opacity-75"
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
