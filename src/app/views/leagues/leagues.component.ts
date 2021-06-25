import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from 'src/app/models/leagues.model';
import { LeaguesService } from 'src/app/services/leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent implements OnInit {
  leagues: any = [];
  newLeague: League = {
    name: '',
    id: '',
    logo: '',
  };

  constructor(private leaguesService: LeaguesService, private router: Router) {}

  ngOnInit(): void {
    this.leaguesService.getAllLeagues().then((r) => (this.leagues = r));
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  addLeague() {
    this.leaguesService.addLeague(this.newLeague).then((r) => {
      this.router.navigateByUrl('/leagues');
    });
    this.newLeague = {
      name: '',
      id: '',
      logo: '',
    };
  }
}
