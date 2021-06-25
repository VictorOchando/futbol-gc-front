import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { League } from 'src/app/models/leagues.model';
import { Team } from 'src/app/models/teams.model';
import { LeaguesService } from 'src/app/services/leagues.service';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss'],
})
export class TeamDetailComponent implements OnInit {
  team: any = { name: '', id: '', logo: '', leagueId: '', league: {} };
  editedTeam: Team = { name: '', id: '', logo: '', leagueId: '' };
  players: any = [];
  leagues: any = [];
  playersExist: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService,
    private router: Router,
    private leaguesService: LeaguesService,
    private playersService: PlayersService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.teamsService.getTeam(id!).then((r: any) => {
      this.team = r;
    });
    this.playersService.getPlayersByTeam(id!).then((r) => {
      this.players = r;
      if (this.players.length > 0) this.playersExist = true;
    });

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  editTeam() {
    this.editedTeam = {
      name: this.team.name,
      id: this.team.id,
      logo: this.team.logo,
      leagueId: this.team.leagueId,
    };
    this.teamsService
      .editTeam(this.editedTeam)
      .then((r) => this.router.navigateByUrl('/teams/' + this.team.id));
  }
  deleteTeam() {
    this.teamsService
      .deleteTeam(this.team.id)
      .then((r) => this.router.navigateByUrl('/teams'));
  }
  getLeagues() {
    this.leaguesService.getAllLeagues().then((r) => {
      this.leagues = r;
    });
  }
}
