import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SteamService } from 'src/app/services/steam/steam.service';
import { Player } from 'src/classes/player';

@Component({
  selector: 'app-welcome-field',
  templateUrl: './welcome-field.component.html',
  styleUrls: ['./welcome-field.component.scss']
})
export class WelcomeFieldComponent implements OnInit {

  private steamId: string;
  private alertMsg: string;
  private loading: boolean = false;

  constructor(private router: Router, private steam: SteamService) { }

  ngOnInit() {
  }

  private closeAlert() {
    this.alertMsg = "";
  }

  private onFindGamesClick() {
    if (!this.steamId) {
      this.alertMsg = "Please enter a valid steam ID.";
    } else {
      this.loading = true;
      this.steam.getPlayerInfo(this.steamId).subscribe((player: Player) => {
        if (player.exists) {
          if (player.public) {
            this.router.navigate(['games'], {queryParams: { steamId: this.steamId }});
          } else {
            this.alertMsg = `The profile for ${player.profileName} isn't public.`;
          }
        } else {
          this.alertMsg = `There is no player with ID '${this.steamId}'`;
        }
        this.loading = false;
      }, (err: any) => {
        console.log(err);
        this.alertMsg = "Uh oh, an error ocurred!";
        this.loading = false;
      });
    }
  }
}
