import { IContact, INavItem } from "@/utils/interfaces";
import { Header } from "./Header";
import { getContent } from "@/utils/contentful";
import { HEAD_QUERY } from "@/utils/queries";
import "../app/globals.css";
import { Footer } from "./Footer";

export const PageFrame = async ({
  children,
}: {
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
    <div className={`transition duration-300 min-h-screen flex flex-col`}>
      <Header items={header?.items || []} />
      <main className="flex grow flex-col items-center">
        <div className="flex flex-col grow py-8 max-width">
          <div className="flex flex-col grow p-4 md:p-8 rounded-lg bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.1)]">
            {children}
          </div>
        </div>
      </main>
      <Footer contact={contact?.items || []} navItems={header?.items || []} />
    </div>
  );
};
