import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { GameControlsComponent } from './game-controls/game-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    GameControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
