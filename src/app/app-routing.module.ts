import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GameChooserComponent } from 'src/app/game-chooser/game-chooser.component';
import { WelcomeFieldComponent } from 'src/app/welcome-field/welcome-field.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeFieldComponent },
  { path: 'games', component: GameChooserComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
