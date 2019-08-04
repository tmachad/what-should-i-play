import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-field',
  templateUrl: './welcome-field.component.html',
  styleUrls: ['./welcome-field.component.scss']
})
export class WelcomeFieldComponent implements OnInit {

  private steamId: string;
  private alertMsg: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private closeAlert() {
    this.alertMsg = "";
  }

  private onFindGamesClick() {
    if (!this.steamId) {
      this.alertMsg = "You need to provide your steam ID";
    } else {
      // TODO: add checking valid ID and for profile private/public setting
      this.router.navigate(['games'], {queryParams: { steamId: this.steamId }});
    }
  }
}
