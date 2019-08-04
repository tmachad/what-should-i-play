import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';

import { Game } from 'src/classes/game';
import { Player } from 'src/classes/player';

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

  public getPlayerInfo(steamId: string): Observable<Player> {
    let url = `${SteamService.API_ROOT_PLAYER}/${steamId}`;
    return this.http.get<Player>(url);
  }
}
