export type Character = {
    id: number;
    name: string;
    image: string;
    gender: string;
    species: string;
}

export type ResponseInfo = {
    count: number;
    next: string;
    prev: string | null;
    pages: number;
}

export type CharacterResponse = {
    info: ResponseInfo;
    results: Character[];
}