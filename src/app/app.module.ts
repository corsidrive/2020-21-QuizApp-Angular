import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { GameComponent } from './game/game.component';
import { AnswersListComponent } from './game/answers-list/answers-list.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    GameComponent,
    AnswersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
