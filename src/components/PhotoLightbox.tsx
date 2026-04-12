"use client";

import { IPhotoGallery } from "@/utils/interfaces";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface PhotoLightboxProps {
  photo: IPhotoGallery;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 250);
  }, [onClose]);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-250 backdrop-blur-sm ${
        visible ? "bg-black/85" : "bg-black/0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative max-h-[90vh] max-w-4xl w-full transition-all duration-250 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm cursor-pointer transition-colors duration-150"
        >
          Fechar ✕
        </button>
        <div className="relative w-full overflow-hidden rounded-xl shadow-2xl bg-black">
          <Image
            src={photo.image.url}
            width={photo.image.width}
            height={photo.image.height}
            alt={photo.title}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div
            className={`absolute bottom-0 left-0 right-0 px-4 py-3 transition-all duration-300 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p className="text-base font-semibold text-white">{photo.title}</p>
            {photo.description && (
              <p className="mt-1 text-sm text-white/75">{photo.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
