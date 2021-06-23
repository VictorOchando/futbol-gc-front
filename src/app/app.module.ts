import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './views/players/players.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PlayerDetailComponent } from './views/player-detail/player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    NavbarComponent,
    PlayerDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
