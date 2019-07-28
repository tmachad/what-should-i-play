import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeFieldComponent } from './welcome-field/welcome-field.component';
import { GameChooserComponent } from './game-chooser/game-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeFieldComponent,
    GameChooserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
