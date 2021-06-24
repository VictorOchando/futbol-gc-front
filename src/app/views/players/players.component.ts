import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player.model';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  teams = {};
  newPlayer: Player = {
    name: '',
    id: '',
    avatar: '',
    teamId: '',
  };
  //name: string = '';
  players: any = [];
  prueba: any;

  constructor(
    private playersService: PlayersService,
    private router: Router,
    private route: ActivatedRoute,
    private teamsService: TeamsService
  ) {}

  ngOnInit(): void {
    this.playersService.getAllPlayers().then((r) => (this.players = r));

    this.teamsService.getAllTeams().then((r) => r);

    //TODO: axios get to teams for the selector
  }

  addPlayer() {
    console.log(this.newPlayer);
    this.playersService.addPlayer(this.newPlayer).then((r) => {
      this.router.navigateByUrl('/players');
    });
    //Clear fields for new input

    this.newPlayer = {
      name: '',
      id: '',
      avatar: '',
      teamId: '',
    };
  }
}
