import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player.model';
import { PlayersService } from 'src/app/services/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
})
export class PlayerDetailComponent implements OnInit {
  player: any = { name: '', id: '', avatar: '', teamId: '' };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playersService: PlayersService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.playersService.getPlayer(id!).then((r: any) => (this.player = r));
  }

  editPlayer() {
    this.playersService
      .editPlayer(this.player)
      .then((r) => (console.log(r), (this.player = r)));
  }

  deletePlayer() {
    this.playersService
      .deletePlayer(this.player.id)
      .then((r) => this.router.navigateByUrl('/players'));
  }
}
