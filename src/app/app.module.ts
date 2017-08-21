import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GetJsonService } from './get-json/get-json.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoute } from '../app/appRoutes/appRoutes.route';
import { GetJsonComponent } from './get-json/get-json.component';
import { ChessComponent } from './chess/chess.component';
import { ChessService } from './chess/chess.service';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    GetJsonComponent,
    HomeComponent,
    ChessComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule, HttpModule
  ],
  providers: [GetJsonService, ChessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
