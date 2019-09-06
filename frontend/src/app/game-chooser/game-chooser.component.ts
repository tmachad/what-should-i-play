import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SteamService } from 'src/app/services/steam/steam.service';
import { Game } from 'src/classes/game';
import { SlotReelComponent } from 'src/app/slot-reel/slot-reel.component';

@Component({
  selector: 'app-game-chooser',
  templateUrl: './game-chooser.component.html',
  styleUrls: ['./game-chooser.component.scss']
})
export class GameChooserComponent implements OnInit {

  @ViewChild("slotReel")
  private slotReel: SlotReelComponent

  private games: Game[];
  private buttonText: string = "Choose Game";
  private buttonEnabled: boolean = false;

  constructor(private route: ActivatedRoute, private steam: SteamService) { }

  ngOnInit() {
    const steamId = this.route.snapshot.queryParamMap.get("steamId");
    if (steamId) {
      this.steam.getGames(steamId).subscribe((g) => {
        this.games = g;
        this.buttonEnabled = true;
      },
      (err: any) => {
        console.log(err);
      });
    }
  }

  private chooseGame(): void {
    this.buttonEnabled = false;
    this.buttonText = "Spinning!";
    this.slotReel.spin();
  }

  private itemSelected(item: Game) {
    this.buttonEnabled = true;
    this.buttonText = "Choose Game";
  }
}
