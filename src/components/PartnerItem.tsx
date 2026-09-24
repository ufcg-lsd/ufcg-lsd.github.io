import { IPartner } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

export const PartnerItem = ({ item }: { item: IPartner }) => {
  return (
    <div className="group relative aspect-video flex items-center justify-center rounded-xs overflow-hidden bg-gray-50 hover:opacity-75 transition-all duration-300">
      <Link
        href={item.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-full h-full p-6"
      >
        {item.logo?.url ? (
          <Image
            src={item.logo.url}
            alt={item.name}
            width={item.logo.width}
            height={item.logo.height}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <span className="text-sm font-medium text-gray-500 text-center">
            {item.name}
          </span>
        )}
      </Link>
    </div>
  );
};
