import MoreShips from "@/components/MoreShips";
import { fetchShips } from "@/utils/api";

export default async function Ships({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {


  const limit = 12;
  const ships = await fetchShips({ limit: limit }); //Fetch initial ships and pass to moreships component for infinite scroll

  return (
    <main className="flex flex-col gap-10 p-10 min-h-screen w-full">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl text-white text-center font-bold">
          OUR RANGE OF SHIPS
        </h2>
        <MoreShips limit={limit} initialShips={ships.docs}/>
      </div>
    </main>
  );
}
