"use client";

import { IHomePost } from "@/utils/interfaces";
import { MosaicItem } from "./MosaicItem";
import { Masonry } from "react-plock";

export const Mosaic = ({ posts }: { posts: IHomePost[] }) => {

  return (
    <div className="max-width my-8">
      <div className="p-4 rounded-lg bg-white">
        <Masonry
          items={posts}
          config={{
            columns: [1, 2, 3],
            gap: [4, 8, 12],
            media: [640, 768, 1444],
          }}
          render={(item, idx) => <MosaicItem key={idx} item={item} />}
        />
      </div>
    </div>
  );
};
