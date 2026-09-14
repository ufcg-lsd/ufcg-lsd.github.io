"use client";

import { IPhotoGallery } from "@/utils/interfaces";
import Image from "next/image";

interface PhotoCardProps {
  photo: IPhotoGallery;
  bentoClass?: string;
  onClick: () => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  photo,
  bentoClass = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xs cursor-pointer ${bentoClass}`}
    >
      <Image
        src={photo.image.url}
        width={photo.image.width}
        height={photo.image.height}
        alt={photo.title}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-sm font-semibold text-white leading-tight">
          {photo.title}
        </p>
        {photo.description && (
          <p className="mt-0.5 text-xs text-white/75 line-clamp-2">
            {photo.description}
          </p>
        )}
      </div>
    </div>
  );
};
