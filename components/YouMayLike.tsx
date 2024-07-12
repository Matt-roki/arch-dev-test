import { ShipData } from "@/utils/types"
import { ShipCard } from "./ShipCard"
import Link from "next/link"

const YouMayLike = ({ships}: {ships: ShipData[]}) => {
    return(
        <div className="flex flex-col gap-5">
        <h2 className="text-2xl text-white text-center font-bold">
          OTHER SHIPS YOU MAY LIKE
        </h2>
        <div className="grid grid-cols-3 justify-between items-center gap-5 w-full">
          {ships.map((shipData: ShipData, index: number) => (
            <ShipCard
              shipData={shipData}
              key={index}
            />
          ))}
        </div>
        <Link href="/ships" className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">View all ships</Link>
      </div>
    )
}

export default YouMayLike