import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './views/players/players.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PlayerDetailComponent } from './views/player-detail/player-detail.component';
import { TeamsComponent } from './views/teams/teams.component';
import { TeamDetailComponent } from './views/team-detail/team-detail.component';
import { LeaguesComponent } from './views/leagues/leagues.component';
import { LeagueDetailComponent } from './views/league-detail/league-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    NavbarComponent,
    PlayerDetailComponent,
    TeamsComponent,
    TeamDetailComponent,
    LeaguesComponent,
    LeagueDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
