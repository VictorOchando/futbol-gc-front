import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player.model';
import { PlayersService } from 'src/app/services/players.service';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
})
export class PlayerDetailComponent implements OnInit {
  player: any = { name: '', id: '', avatar: '', teamId: '', team: {} };
  teams: any;
  editedPlayer: Player = { name: '', id: '', avatar: '', teamId: '' };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playersService: PlayersService,
    private teamsService: TeamsService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.playersService.getPlayer(id!).then((r: any) => (this.player = r));
  }

  editPlayer() {
    this.editedPlayer = {
      name: this.player.name,
      id: this.player.id,
      avatar: this.player.avatar,
      teamId: this.player.teamId,
    };
    this.playersService
      .editPlayer(this.editedPlayer)
      .then((r) => this.router.navigateByUrl('/players/' + this.player.id));
  }

  deletePlayer() {
    this.playersService
      .deletePlayer(this.player.id)
      .then((r) => this.router.navigateByUrl('/players'));
  }
  getTeams() {
    this.teamsService.getAllTeams().then((r) => {
      this.teams = r;
    });
  }
}
