import { cn } from "@/lib/utils";

interface FilterBarProps {
  tags: { name: string }[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onClear: () => void;
  count: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedTags,
  tags,
  onTagSelect,
  onClear,
  count,
}) => {
  const isAllSelected = selectedTags.length === 0;

  const pillClass = (selected: boolean) =>
    cn(
      "rounded-xs border px-2 py-1 text-sm font-medium transition-colors cursor-pointer bg-white",
      selected
        ? "border-cyan-700 text-cyan-700"
        : "border-gray-200 text-gray-700 hover:bg-gray-50",
    );

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-lg font-bold text-gray-900">Áreas de atuação</h3>
        <span className="text-sm text-gray-500">
          {count} projeto(s)
        </span>
      </div>
      <div className="flex flex-wrap gap-3">
        <button onClick={onClear} className={pillClass(isAllSelected)}>
          Todos
        </button>
        {tags.map((tag) => (
          <button
            key={tag.name}
            onClick={() => onTagSelect(tag.name)}
            className={pillClass(selectedTags.includes(tag.name))}
          >
            #{tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};
