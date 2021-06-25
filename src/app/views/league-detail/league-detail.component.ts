import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { League } from 'src/app/models/leagues.model';
import { LeaguesService } from 'src/app/services/leagues.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.scss'],
})
export class LeagueDetailComponent implements OnInit {
  league: any = { name: '', id: '', logo: '' };
  teamsExist: boolean = false;
  teams: any;
  constructor(
    private leaguesService: LeaguesService,
    private route: ActivatedRoute,
    private router: Router,
    private teamsService: TeamsService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.leaguesService.getLeague(id!).then((r: any) => (this.league = r));
    this.teamsService.getTeamsByLeague(id!).then((r) => {
      this.teams = r;
      if (this.teams.length > 0) this.teamsExist = true;
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  editLeague() {
    this.leaguesService.editLeague(this.league).then((r) => r);
  }
  deleteLeague() {
    this.leaguesService
      .deleteLeague(this.league.id)
      .then((r) => this.router.navigateByUrl('/leagues'));
  }
}
