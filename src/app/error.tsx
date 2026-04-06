"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center text-gray-600">
      <p className="text-2xl font-semibold">Algo deu errado</p>
      <p className="text-sm">{error.message || "Ocorreu um erro inesperado."}</p>
      <button
        onClick={reset}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Tentar novamente
      </button>
    </div>
  );
}
