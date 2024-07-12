import { ShipCard } from "@/components/ShipCard";
import YouMayLike from "@/components/YouMayLike";
import { fetchOneShip, fetchShips } from "@/utils/api";
import { FetchShipsResponse, ShipData } from "@/utils/types";

export default async function Ship({ params }: { params: { id: string } }) {
  const limit = 3;

  let ship: ShipData | null = null;
  let ships: FetchShipsResponse | null = null;

  try {
    ships = await fetchShips({ limit });
    ship = await fetchOneShip({ id: params.id });
  } catch (error) {
    console.error("Error fetching ship data:", error);
  }

  if (!ship) {
    return (
      <main className="flex flex-col gap-10 p-10 min-h-screen w-full">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl text-white text-center font-bold">
            Ship not found
          </h2>
        </div>
      </main>
    );
  }


  return (
    <main className="flex flex-col gap-10 p-10 min-h-screen w-full">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl text-white text-center font-bold">
          {ship.name}
        </h2>
        <div className="justify-between items-center gap-5 w-full">
          <ShipCard
            shipData={ship}
            allDetails
          />
        </div>
      </div>
      {ships && <YouMayLike ships={ships.docs} />}
    </main>
  );
}
