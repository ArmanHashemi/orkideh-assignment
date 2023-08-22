export interface MarvelCharacter {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export interface MarvelData {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: MarvelCharacter[];
}

export interface MarvelResponse {
    data: MarvelData;
}
