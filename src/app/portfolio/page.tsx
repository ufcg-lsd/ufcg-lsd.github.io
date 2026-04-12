import { PageFrame } from "@/components/PageFrame";

export const revalidate = 60;

export default async function Portfolio() {
  return (
    <PageFrame>
      <div className="grow flex flex-col items-center justify-center text-center text-gray-500">
        <p className="text-2xl font-semibold">Em breve</p>
        <p className="mt-2 text-sm">Esta página está em construção.</p>
      </div>
    </PageFrame>
  );
}
