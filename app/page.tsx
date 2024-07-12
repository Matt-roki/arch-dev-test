import { ShipCard } from "@/components/ShipCard";
import { fetchShips } from "@/utils/api";
import { ShipData } from "@/utils/types";
import Link from "next/link";

export default async function Home() {
  const limit = 6;
  const ships = await fetchShips({ limit: limit });

  return (
    <main className="flex flex-col gap-10 p-10 min-h-screen w-full">

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl text-white text-center font-bold">
          OUR RANGE OF SHIPS
        </h2>
        <div className="grid grid-cols-3 justify-between items-center gap-5 w-full">
          {ships.docs.map((shipData: ShipData, index: number) => (
            <ShipCard
              shipData={shipData}
              key={index}
            />
          ))}
        </div>
        <Link href="/ships" className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">View all ships</Link>
      </div>
    </main>
  );
}
