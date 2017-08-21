import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { GetJsonComponent } from '../get-json/get-json.component';
import { ChessComponent } from '../chess/chess.component';

export const appRoute: Routes = [
    { path: '', component: HomeComponent },
    { path: 'getJson', component: GetJsonComponent },
    { path: 'chessGame', component: ChessComponent }
]
