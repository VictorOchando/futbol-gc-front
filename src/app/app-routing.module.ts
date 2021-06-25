import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueDetailComponent } from './views/league-detail/league-detail.component';
import { LeaguesComponent } from './views/leagues/leagues.component';
import { PlayerDetailComponent } from './views/player-detail/player-detail.component';
import { PlayersComponent } from './views/players/players.component';
import { TeamDetailComponent } from './views/team-detail/team-detail.component';
import { TeamsComponent } from './views/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full',
  },
  {
    path: 'players',
    component: PlayersComponent,
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent,
  },
  {
    path: 'teams/:id',
    component: TeamDetailComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'leagues/:id',
    component: LeagueDetailComponent,
  },
  {
    path: 'leagues',
    component: LeaguesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
