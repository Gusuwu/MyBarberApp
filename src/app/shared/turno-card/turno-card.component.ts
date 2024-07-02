import { Component, Input, OnInit } from '@angular/core';
import { TurnoViewModel } from 'src/app/view-models/turnoViewModel';

@Component({
  selector: 'turno-card',
  templateUrl: './turno-card.component.html',
  styleUrls: ['./turno-card.component.scss'],
})
export class TurnoCardComponent  implements OnInit {

  @Input() turno : TurnoViewModel = new TurnoViewModel;

  constructor() { }

  ngOnInit() {}

}
