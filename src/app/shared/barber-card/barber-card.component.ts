import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UsuarioViewModel } from 'src/app/view-models/usuarioViewModel';

@Component({
  selector: 'barber-card',
  templateUrl: './barber-card.component.html',
  styleUrls: ['./barber-card.component.scss'],
})
export class BarberCardComponent  implements OnChanges {

  @Input() barbero : UsuarioViewModel = new UsuarioViewModel;
  image : string = '';

  constructor() { }

  ngOnChanges(): void {
    if (this.barbero.foto) {
      this.image = 'data:image/jpeg;base64,' + this.barbero.fotoUrl;
    }
  }


}
