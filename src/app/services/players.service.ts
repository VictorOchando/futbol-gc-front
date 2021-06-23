import { Injectable } from '@angular/core';
import axios from 'axios';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  getAll(): Promise<Player[]> {
    return axios.get('http://localhost:3000/players').then((r) => r.data);
  }

  getById(id: string): Promise<Player> {
    return axios.get('http://localhost:3000/players/' + id).then((r) => r.data);
  }

  addPlayer(player: Player) {
    return axios
      .post('http://localhost:3000/players', player)
      .then((r) => r.data);
  }

  editPlayer(player: Player) {
    return axios
      .patch('http://localhost:3000/players/' + player.id, player)
      .then((r) => r.data);
  }

  deletePlayer(id: string) {
    return axios
      .delete('http://localhost:3000/players/' + id)
      .then((r) => r.data);
  }
}
