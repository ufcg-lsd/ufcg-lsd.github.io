import { IContact, INavItem } from "@/utils/interfaces";
import { Header } from "./Header";
import { getContent } from "@/utils/contentful";
import { HEAD_QUERY } from "@/utils/queires";
import "../app/globals.css";
import { Footer } from "./Footer";

export const PageFrame = async ({
  background,
  children,
}: {
  background: string;
  children?: React.ReactNode;
}) => {
  const {
    navItemsCollection: header,
    contactCollection: contact,
  }: {
    navItemsCollection: { items: INavItem[] };
    contactCollection: { items: IContact[] };
  } = await getContent(HEAD_QUERY);

  return (
    <div
      style={{ backgroundColor: background }}
      className={`transition duration-300 min-h-screen flex flex-col`}
    >
      <Header items={header?.items || []} />
      <main className="min-h-screen">{children}</main>
      <Footer contact={contact?.items || []} navItems={header?.items || []} />
    </div>
  );
};
