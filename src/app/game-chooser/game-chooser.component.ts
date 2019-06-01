import { Component, OnInit } from '@angular/core';

import { Game } from 'src/classes/game';

@Component({
  selector: 'app-game-chooser',
  templateUrl: './game-chooser.component.html',
  styleUrls: ['./game-chooser.component.scss']
})
export class GameChooserComponent implements OnInit {

  private games: Game[];

  constructor() { }

  ngOnInit() {
  }

}
