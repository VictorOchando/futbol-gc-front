import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from 'src/app/models/leagues.model';
import { Team } from 'src/app/models/teams.model';
import { LeaguesService } from 'src/app/services/leagues.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  // No puedo tipar esto sjdkasjdakd
  leagues: any = [];
  teams: any = [];
  newTeam: Team = {
    name: '',
    id: '',
    logo: '',
    leagueId: '',
  };

  constructor(
    private router: Router,
    private teamsService: TeamsService,
    private leaguesService: LeaguesService
  ) {}

  ngOnInit(): void {
    this.teamsService.getAllTeams().then((r) => {
      this.teams = r;
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  addTeam() {
    this.teamsService.addTeam(this.newTeam).then((r) => {
      this.router.navigateByUrl('/teams');
    });
    //Clear fields for new input

    this.newTeam = {
      name: '',
      id: '',
      logo: '',
      leagueId: '',
    };
  }

  getLeagues() {
    this.leaguesService.getAllLeagues().then((r) => {
      this.leagues = r;
    });
  }
}
