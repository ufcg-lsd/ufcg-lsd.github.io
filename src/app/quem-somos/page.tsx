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
    pageNavItem,
  }: {
    valuesCollection: { items: IValues[] };
    navItemsCollection: { items: INavItem[] };
    pageNavItem: { items: INavItem[] };
  } = await getContent(QUEM_SOMOS_QUERY);

  const { mission, vision, values } = valuesCollection.items[0];
  const colors = navItemsCollection.items.map((i) => i.color);
  const pageColor = pageNavItem.items[0]?.color;

  return (
    <PageFrame>
      <div className="flex flex-col gap-6 py-4 px-4">
        <div className="flex flex-col gap-2" style={{ color: pageColor }}>
          <h1 className="text-3xl font-bold">Quem Somos</h1>
          <p className="text-base">
            Conheça nossa missão, visão e os valores que guiam o trabalho do laboratório, além de um pouco da nossa história em fotos.
          </p>
        </div>
        <hr className="border-gray-200" />

        <h2 className="text-2xl font-semibold text-gray-800">
          Missão, Visão e Valores
        </h2>

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
                className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
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
