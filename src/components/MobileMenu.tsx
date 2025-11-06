"use client";

import { INavItem } from "@/utils/interfaces";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MobileMenuItem } from "./MobileMenuItem"; // Changed import to MobileMenuItem
import { useEffect, useState } from "react"; // Import useState and useEffect
import Link from "next/link";
import { Icon } from "./Icon";

export const MobileMenu = ({
  items,
  isOpen,
  onClose,
}: {
  items: INavItem[];
  isOpen: boolean;
  onClose: () => void;
}) => {
  const pathname = usePathname();
  const [currentBackgroundColor, setCurrentBackgroundColor] =
    useState("bg-background/90"); // Default background

  useEffect(() => {
    const selectedItem = items.find((item) => pathname === item.link);
    if (selectedItem && selectedItem.color) {
      setCurrentBackgroundColor(selectedItem.color);
    } else {
      setCurrentBackgroundColor("bg-background/90"); // Fallback if no item is selected or color is missing
    }
  }, [pathname, items]);

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 right-0 h-full w-64 p-4 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: currentBackgroundColor }} // Apply dynamic background color
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="text-white float-right mb-4 cursor-pointer hover:opacity-75 transition-all duration-300"
        >
          <Icon id="close" size={24} />
        </button>
        <Link href="/">
          <Image
            src={"/logo.png"}
            width={500}
            height={500}
            className="w-full h-fit px-4"
            alt="LSD logo with the characters combining as one big logo"
          />
        </Link>
        <div className="flex flex-col mt-8">
          {items
            .sort((a, b) => a.order - b.order)
            .map((item, i) => (
              <MobileMenuItem
                item={item}
                key={i}
                selected={pathname === item.link}
                onClose={onClose}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
