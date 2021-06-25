import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  apiUrl = 'http://localhost:3000';
  constructor() {}

  getAllPlayers() {
    return axios
      .get(environment.apiUrl + '/players?_expand=team')
      .then((r) => r.data);
  }

  getPlayer(id: string): any {
    return axios
      .get(environment.apiUrl + '/players/' + id + '?_expand=team')
      .then((r) => r.data);
  }

  addPlayer(player: Player) {
    return axios
      .post(environment.apiUrl + '/players', player)
      .then((r) => r.data);
  }

  editPlayer(player: Player) {
    return axios
      .patch(environment.apiUrl + '/players/' + player.id, player)
      .then((r) => r.data);
  }

  deletePlayer(id: string) {
    return axios
      .delete(environment.apiUrl + '/players/' + id)
      .then((r) => r.data);
  }
  getPlayersByTeam(id: string) {
    return axios
      .get(environment.apiUrl + '/players?teamId=' + id)
      .then((r) => r.data);
  }
}
