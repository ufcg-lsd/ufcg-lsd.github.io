import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (updater: (p: number) => number) => void;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex justify-between text-sm text-gray-600">
      <button
        onClick={() => onPageChange((p) => p - 1)}
        disabled={currentPage === 0}
        className="flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 disabled:opacity-30"
      >
        ← Anterior
      </button>
      <button
        onClick={() => onPageChange((p) => p + 1)}
        disabled={currentPage >= totalPages - 1}
        className="flex items-center gap-1 cursor-pointer transition-colors hover:text-gray-900 disabled:opacity-30"
      >
        Próximo →
      </button>
    </div>
  );
};
