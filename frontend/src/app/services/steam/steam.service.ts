import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';

import { Game } from 'src/classes/game';
import { SteamPlayerGamesList } from 'src/classes/steam-player-games-response';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  private static readonly API_ROOT: string = `${env.apiRoot}/steam`;
  private static readonly API_ROOT_PLAYER: string = `${SteamService.API_ROOT}/player`;
  private static readonly API_ROOT_STORE: string;

  constructor(private http: HttpClient) { }

  public getGames(steamId: string): Observable<Game[]> {
    let url = `${SteamService.API_ROOT_PLAYER}/${steamId}/ownedgames`;
    return this.http.get<Game[]>(url);
  }
}
