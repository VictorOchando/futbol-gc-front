import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewgrid',
  templateUrl: './viewgrid.component.html',
  styleUrls: ['./viewgrid.component.scss'],
})
export class ViewgridComponent implements OnInit {
  @Input() items: any = [];
  @Input() itemType: string = '';
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
