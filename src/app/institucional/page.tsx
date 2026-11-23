import { MissionVisionValues } from "@/components/MissionVisionValues";
import { PageFrame } from "@/components/PageFrame";
import { getContent } from "@/utils/contentful";
import { INavItem, IPageHeader, IValues } from "@/utils/interfaces";
import { INSTITUCIONAL_QUERY } from "@/utils/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import React from "react";

export const revalidate = 60;

export default async function Institucional() {
  const {
    pageHeaderCollection,
    valuesCollection,
    navItemsCollection,
  }: {
    pageHeaderCollection: { items: IPageHeader[] };
    valuesCollection: { items: IValues[] };
    navItemsCollection: { items: INavItem[] };
  } = await getContent(INSTITUCIONAL_QUERY);

  const pageHeader = pageHeaderCollection.items[0];
  const { mission, vision, values } = valuesCollection.items[0];
  const colors = navItemsCollection.items.map((i) => i.color);
  const linkColor = colors?.[0] ?? "#2563eb";

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: unknown, children: React.ReactNode) => (
        <p style={{ marginBottom: "1.25rem", lineHeight: "1.65" }}>{children}</p>
      ),
      [INLINES.HYPERLINK]: (
        node: { data?: { uri?: string } },
        children: React.ReactNode,
      ) => (
        <a
          href={node.data?.uri}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: linkColor,
            textDecoration: "underline",
            fontWeight: 500,
          }}
        >
          {children}
        </a>
      ),
    },
    renderText: (text: string) => {
      return text
        .split("\n")
        .reduce((children: React.ReactNode[], textSegment, index) => {
          return [
            ...children,
            index > 0 && (
              <span
                key={index}
                style={{ display: "block", marginTop: "1rem" }}
              />
            ),
            textSegment,
          ];
        }, []);
    },
  };

  return (
    <PageFrame>
      <div className="flex flex-col gap-6 py-4 px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {pageHeader?.title}
          </h1>
          {pageHeader?.text && (
            <article className="text-sm md:text-base text-gray-600 mt-1">
              {documentToReactComponents(pageHeader.text.json, richTextOptions)}
            </article>
          )}
        </div>
        <hr className="border-gray-200" />
        <MissionVisionValues
          mission={mission}
          vision={vision}
          values={values}
          colors={colors}
        />
      </div>
    </PageFrame>
  );
}