import { InfoCard } from "@/components/InfoCard";
import { getRandomBrandColor } from "@/utils/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export const MissionVisionValues = ({
  mission,
  vision,
  values,
  colors,
}: {
  mission: { json: Document };
  vision: { json: Document };
  values: string[];
  colors: string[];
}) => {
  const visaoColor = getRandomBrandColor(colors);
  const missaoColor = getRandomBrandColor(colors);
  const valoresColor = getRandomBrandColor(colors);

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">
        Missão, visão e valores
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard icon="eye" title="Visão" color={visaoColor}>
          {documentToReactComponents(vision.json)}
        </InfoCard>

        <InfoCard icon="target" title="Missão" color={missaoColor}>
          {documentToReactComponents(mission.json)}
        </InfoCard>
      </div>

      <InfoCard icon="star" title="Valores" color={valoresColor}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {values.map((value, index) => (
            <div
              key={value}
              className={`flex items-start gap-2 py-3 text-sm text-gray-700 ${
                index !== values.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: valoresColor }}
              />
              {value}
            </div>
          ))}
        </div>
      </InfoCard>
    </>
  );
};
