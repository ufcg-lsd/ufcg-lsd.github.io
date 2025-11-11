import { Mosaic } from "@/components/Mosaic";
import { PageFrame } from "@/components/PageFrame";
import { getContent } from "@/utils/contentful";
import { IHomePost } from "@/utils/interfaces";
import { HOME_QUERY } from "@/utils/queires";

export default async function Home() {
  const {
    homePostCollection: posts,
  }: {
    homePostCollection: { items: IHomePost[] };
  } = await getContent(HOME_QUERY);

  console.log(posts)
  return (
    <PageFrame background="var(--color-cyan-standard)">
      <Mosaic posts={posts.items || []}/>
    </PageFrame>
  );
}
