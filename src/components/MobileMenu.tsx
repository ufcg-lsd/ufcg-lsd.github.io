"use client";

import { INavItem } from "@/utils/interfaces";
import { usePathname } from "next/navigation";
import { MobileMenuItem } from "./MobileMenuItem";
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

  return (
    <div
      className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-lg rounded-b-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-start p-4">
          <button
            onClick={onClose}
            className="border border-gray-200 rounded-lg p-2 text-gray-500 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            <Icon id="close" size={20} />
          </button>
        </div>
        <div className="flex flex-col pb-4">
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
