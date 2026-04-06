import { InfoCard } from "@/components/InfoCard";
import { PageFrame } from "@/components/PageFrame";
import { getContent } from "@/utils/contentful";
import { INavItem, IValues } from "@/utils/interfaces";
import { QUEM_SOMOS_QUERY } from "@/utils/queries";
import { getRandomBrandColor } from "@/utils/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 60;

export default async function QuemSomos() {
  const {
    valuesCollection,
    navItemsCollection,
  }: {
    valuesCollection: { items: IValues[] };
    navItemsCollection: { items: INavItem[] };
  } = await getContent(QUEM_SOMOS_QUERY);

  const { mission, vision, values } = valuesCollection.items[0];
  const colors = navItemsCollection.items.map((i) => i.color);

  return (
    <PageFrame>
      <div className="flex flex-col gap-6 py-4 px-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Missão, Visão e Valores
        </h1>
        <hr className="border-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard emoji="🔭" title="Visão" color={getRandomBrandColor(colors)}>
            {documentToReactComponents(vision.json)}
          </InfoCard>

          <InfoCard emoji="🚀" title="Missão" color={getRandomBrandColor(colors)}>
            {documentToReactComponents(mission.json)}
          </InfoCard>
        </div>

        <InfoCard emoji="⭐" title="Valores" color={getRandomBrandColor(colors)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 flex items-center gap-2 overflow-x-auto whitespace-nowrap"
              >
                <span className="mt-0.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                {value}
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
    </PageFrame>
  );
}
