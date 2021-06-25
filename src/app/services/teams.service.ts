import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Team } from '../models/teams.model';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  apiUrl = 'http://localhost:3000';
  constructor() {}

  getAllTeams() {
    return axios
      .get(environment.apiUrl + '/teams?_expand=league') //?_expand=team'
      .then((r) => r.data);
  }

  getTeam(id: string): any {
    return axios
      .get(environment.apiUrl + '/teams/' + id + '?_expand=league')
      .then((r) => r.data);
  }

  addTeam(team: Team) {
    return axios.post(environment.apiUrl + '/teams', team).then((r) => r.data);
  }

  editTeam(team: Team) {
    return axios
      .patch(environment.apiUrl + '/teams/' + team.id, team)
      .then((r) => r.data);
  }

  deleteTeam(id: string) {
    return axios
      .delete(environment.apiUrl + '/teams/' + id)
      .then((r) => r.data);
  }
  getTeamsByLeague(id: string) {
    return axios
      .get(environment.apiUrl + '/teams?leagueId=' + id)
      .then((r) => r.data);
  }
}
