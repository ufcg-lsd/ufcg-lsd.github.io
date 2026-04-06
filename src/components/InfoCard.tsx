import { ReactNode } from "react";

interface InfoCardProps {
  emoji: string;
  title: string;
  color: string;
  children: ReactNode;
}

export const InfoCard = ({ emoji, title, color, children }: InfoCardProps) => {
  return (
    <div
      className="rounded-xl border border-gray-200 border-t-4 p-6 bg-white shadow-sm flex flex-col gap-4"
      style={{ borderTopColor: color }}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{emoji}</span>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      <div className="text-gray-700 text-sm">{children}</div>
    </div>
  );
};
