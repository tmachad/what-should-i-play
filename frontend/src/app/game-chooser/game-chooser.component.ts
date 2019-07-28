import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SteamService } from 'src/app/services/steam/steam.service';
import { Game } from 'src/classes/game';

@Component({
  selector: 'app-game-chooser',
  templateUrl: './game-chooser.component.html',
  styleUrls: ['./game-chooser.component.scss']
})
export class GameChooserComponent implements OnInit {

  private games: Game[];

  constructor(private route: ActivatedRoute, private steam: SteamService) { }

  ngOnInit() {
    console.log('Game Chooser');
    const steamId = this.route.snapshot.queryParamMap.get("steamId");
    console.log(`Steam ID: ${steamId}`);
    if (steamId) {
      this.steam.getGames(steamId).subscribe((g) => {
        console.log(g);
        this.games = g;
      },
      (err: any) => {
        console.log(err);
      });
    }
  }

}
