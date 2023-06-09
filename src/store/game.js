import { create } from 'zustand';

export const useGameStore = create((set, get) => ({
    gamesRunning: 0,
    setGamesRunning: (gamesRunning) => {
        set({ gamesRunning });
    },
    incrementGamesRunning: () => {
        const gamesRunning = get().gamesRunning;
        const calc = gamesRunning + 1;
        set({ gamesRunning: calc < 0 ? 1 : calc });
    },
    decrementGamesRunning: () => {
        const gamesRunning = get().gamesRunning;
        const calc = gamesRunning - 1;

        set({ gamesRunning: calc < 0 ? 0 : calc });
    },
}));
