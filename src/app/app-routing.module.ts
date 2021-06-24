import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
