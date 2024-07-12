import { ShipCard } from "@/components/ShipCard";
import YouMayLike from "@/components/YouMayLike";
import { fetchOneShip, fetchShips } from "@/utils/api";

export default async function Ship({ params }: { params: { id: string } }) {
  const limit = 3;
  const ships = await fetchShips({ limit: limit }); //Fetch details to show youmaylike section
  const ship = await fetchOneShip({ id: params.id }); //Fetch specific ship based on id 


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
      <YouMayLike ships={ships.docs}/>
    </main>
  );
}
