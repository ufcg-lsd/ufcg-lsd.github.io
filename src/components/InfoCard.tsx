import { ReactNode } from "react";
import { Icon } from "./Icon";

interface InfoCardProps {
  icon: string;
  title: string;
  color: string;
  children: ReactNode;
}

export const InfoCard = ({ icon, title, color, children }: InfoCardProps) => {
  return (
    <div
      className="rounded-xs border border-gray-200 border-t-2 p-6 bg-white flex flex-col gap-4"
      style={{ borderTopColor: color }}
    >
      <div className="flex items-center gap-3">
        <Icon id={icon} size={22} style={{ color }} />
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      <div className="text-gray-700 text-sm">{children}</div>
    </div>
  );
};