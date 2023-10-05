import { atomWithStorage } from 'jotai/utils'

interface Favorite {
    matchId: string;
    team1?: string;
    team2?: string;
    score?: string;
    date?: string;
    formattedDate?: string;
}

export const favoritesAtom = atomWithStorage<Favorite[]>('favorites', []);