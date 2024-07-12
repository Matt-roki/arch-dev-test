'use server'

import { FetchShipsResponse, ShipData } from "./types";

export const fetchShips = async ({limit, offset} : {limit: number, offset?: number}) => {
    const res = await fetch(`${process.env.BASE_URL}/v4/ships/query`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {}, 
        options: {
          limit: limit,
          offset: offset
        }
      }),
      cache: "no-cache"
    });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch ship data, status code: ${res.status}`);
    }
  
    const response: FetchShipsResponse = await res.json();
    return response;
};

export const fetchOneShip = async ({ id }: { id: string }) => {
  const res = await fetch(`${process.env.BASE_URL}/v4/ships/${id}`, {
    method: "GET",
    cache: "no-cache"
  });

  if (res.status !== 200) {
    throw new Error(`Failed to fetch ship with id ${id}, status code: ${res.status}`);
  }

  const response: ShipData = await res.json();

  return response;
};
