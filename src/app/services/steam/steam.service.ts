import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';

import { Game } from 'src/classes/game';
import { SteamPlayerGamesList } from 'src/classes/steam-player-games-response';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  private API_ROOT_PLAYER: string = 'http://api.steampowered.com/IPlayerService';
  private API_ROOT_STORE: string;

  constructor(private http: HttpClient) { }

  public getGames(steamId: string): Observable<Game[]> {
    let url = `${this.API_ROOT_PLAYER}/GetOwnedGames/v1/?key=${env.steam.apiKey}&format=json&input_json={"steamid":"${steamId}","include_appinfo":true,"include_played_free_games":true}`
    return this.http.get(url).pipe(
      map((res: SteamPlayerGamesList) => {
        const games: Game[] = [];
        for (const g of res.response.games) {
          games.push({
            iconUrl: g.img_icon_url,
            title: g.name,
            id: g.appid
          });
        }
        return games;
      })
    );
  }
}
