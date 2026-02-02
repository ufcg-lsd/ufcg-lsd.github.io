"use client";

import { IHomePost } from "@/utils/interfaces";
import { MosaicItem } from "./MosaicItem";
import { Masonry } from "react-plock";

export const Mosaic = ({ posts }: { posts: IHomePost[] }) => {
  return (
    <Masonry
      items={posts}
      config={{
        columns: [2, 2, 3],
        gap: [4, 8, 12],
        media: [640, 1200, 1444],
      }}
      render={(item, idx) => <MosaicItem key={idx} item={item} />}
    />
  );
};
