import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { GameComponent } from './game/game.component';
import { GameControlComponent } from './game/game-control/game-control.component';
import { AnswersListComponent } from './game/answers-list/answers-list.component';
import { QuestionHeaderComponent } from './game/question-header/question-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    GameComponent,
    GameControlComponent,
    AnswersListComponent,
    QuestionHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
