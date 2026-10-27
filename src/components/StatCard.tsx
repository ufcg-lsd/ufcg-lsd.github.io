interface StatCardProps {
  value: string | number;
  label: string;
  color: string;
}

export const StatCard = ({ value, label, color }: StatCardProps) => {
  return (
    <div
      className="rounded-xs border border-gray-200 border-t-2 p-6 sm:p-4 bg-white flex flex-col gap-3"
      style={{ borderTopColor: color }}
    >
      <span className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ color: color }}>{value}</span>
      <span className="text-md font-light text-gray-500">{label}</span>
    </div>
  );
};
