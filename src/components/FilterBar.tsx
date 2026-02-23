interface FilterBarProps {
  tags: { name: string }[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ selectedTags, tags, onTagSelect }) => {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-bold text-gray-600">Áreas de atuação</h3>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, i) => (
          <button
            key={i}
            onClick={() => onTagSelect(tag.name)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
              selectedTags.includes(tag.name) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            #{tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};