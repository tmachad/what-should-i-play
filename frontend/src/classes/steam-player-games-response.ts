import { SteamGameSummary } from 'src/classes/steam-game-summary';

export class SteamPlayerGamesList {
    response: {
        game_count: number;
        games: SteamGameSummary[];
    };
}