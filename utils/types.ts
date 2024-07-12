export interface ShipData {
    id: string;
    name: string;
    launches: string[];
    active: boolean;
    home_port: string;
    type: string;
}


export interface FetchShipsResponse {
    docs: ShipData[];
    totalDocs: number;
    limit: number;
    offset: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}