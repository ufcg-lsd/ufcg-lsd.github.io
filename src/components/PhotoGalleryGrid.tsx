"use client";

import { IPhotoGallery } from "@/utils/interfaces";
import { useState } from "react";
import { PaginationControls } from "./PaginationControls";
import { PhotoCard } from "./PhotoCard";
import { PhotoLightbox } from "./PhotoLightbox";

const PAGE_SIZE = 8;

const getBentoClass = (indexInPage: number) => {
  const pos = indexInPage % 8;
  if (pos === 3) return "sm:row-span-2";
  return "";
};

export const PhotoGalleryGrid: React.FC<{ photos: IPhotoGallery[] }> = ({
  photos,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selected, setSelected] = useState<IPhotoGallery | null>(null);

  const totalPages = Math.ceil(photos.length / PAGE_SIZE);
  const paginated = photos.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE,
  );

  if (photos.length === 0)
    return (
      <p className="py-10 text-center text-gray-500">
        Nenhuma foto disponível no momento.
      </p>
    );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[300px] sm:auto-rows-[200px]">
        {paginated.map((photo, i) => (
          <PhotoCard
            key={photo.title + i}
            photo={photo}
            bentoClass={getBentoClass(i)}
            onClick={() => setSelected(photo)}
          />
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {selected && (
        <PhotoLightbox photo={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};
