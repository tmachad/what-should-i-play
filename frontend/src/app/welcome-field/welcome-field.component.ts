import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-field',
  templateUrl: './welcome-field.component.html',
  styleUrls: ['./welcome-field.component.scss']
})
export class WelcomeFieldComponent implements OnInit {

  private steamId: string;

  constructor() { }

  ngOnInit() {
  }

}
