import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { League } from '../models/leagues.model';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  apiUrl = 'http://localhost:3000';
  constructor() {}

  getAllLeagues() {
    return axios.get(environment.apiUrl + '/leagues').then((r) => r.data);
  }

  getLeague(id: string): Promise<League> {
    return axios.get(environment.apiUrl + '/leagues/' + id).then((r) => r.data);
  }

  addLeague(league: League) {
    return axios
      .post(environment.apiUrl + '/leagues', league)
      .then((r) => r.data);
  }

  editLeague(league: League) {
    return axios
      .patch(environment.apiUrl + '/leagues/' + league.id, league)
      .then((r) => r.data);
  }

  deleteLeague(id: string) {
    return axios
      .delete(environment.apiUrl + '/leagues/' + id)
      .then((r) => r.data);
  }
}
