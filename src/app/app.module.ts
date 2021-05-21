import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { GameComponent } from './game/game.component';
import { AnswerListComponent } from './game/answer-list/answer-list.component';
import { QuestionSpaceComponent } from './game/question-space/question-space.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    GameComponent,
    AnswerListComponent,
    QuestionSpaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
