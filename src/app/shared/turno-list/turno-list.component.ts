import { Component, Input, OnInit } from '@angular/core';
import { TurnoViewModel } from 'src/app/view-models/turnoViewModel';

@Component({
  selector: 'turno-list',
  templateUrl: './turno-list.component.html',
  styleUrls: ['./turno-list.component.scss'],
})
export class TurnoListComponent  implements OnInit {

  @Input() turnos: TurnoViewModel[] = [];

  constructor() {}

  ngOnInit() {
  }

}
