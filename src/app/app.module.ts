import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeFieldComponent } from './welcome-field/welcome-field.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeFieldComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeFieldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
