import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from 'src/app/app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeFieldComponent } from './welcome-field/welcome-field.component';
import { GameChooserComponent } from './game-chooser/game-chooser.component';
import { SlotReelComponent } from './slot-reel/slot-reel.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeFieldComponent,
    GameChooserComponent,
    SlotReelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
