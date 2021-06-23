import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  teams = {};
  newPlayer: Player = {
    'Nombre del Jugador': '',
    id: '',
    Avatar: '',
    teamId: '',
  };
  //name: string = '';
  players: Player[] = [];

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getAll().then((r) => (this.players = r));
  }

  addPlayer() {
    console.log(this.newPlayer);
    this.playersService.addPlayer(this.newPlayer).then((r) => console.log(r));
    //Clear fields for new input
    this.newPlayer = {
      'Nombre del Jugador': '',
      id: '',
      Avatar: '',
      teamId: '',
    };
  }
}
