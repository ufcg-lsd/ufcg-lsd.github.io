"use client";

import { IContact, INavItem } from "@/utils/interfaces";
import { Icon } from "./Icon";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Footer = ({
  navItems,
  contact,
}: {
  navItems: INavItem[];
  contact: IContact[];
}) => {
  const pathname = usePathname();

  const email = contact.filter((item) => item.id === "email");
  return (
    <div className="flex justify-center w-full bg-black/30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-(--max-width) px-4 md:px-12 min-h-16 py-4 md:py-16 gap-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <Image
            src={"logo.png"}
            width={200}
            height={100}
            className="max-w-20 md:max-w-80 h-fit"
            alt="LSD logo with the characters combining as one big logo"
          />
          <div className="hidden md:flex flex-col items-center md:items-start gap-2 text-white">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className={`hover-button ${
                  pathname === item.link && "font-bold underline"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end text-white gap-4">
          <h2 className="text-lg md:text-xl font-bold">Redes sociais e contatos</h2>
          <div className="flex gap-2">
            {contact
              .filter(
                (item) => item.id !== "email"
              ) /* Filter out the email item */
              .map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="hover-button"
                >
                  <Icon id={item.id} size={24} className="text-white" />
                </a>
              ))}
          </div>
          {email && (
            <a
              className="hover-button underline"
              href={`mailto:${email[0].link}`}
            >
              {email[0].link}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
