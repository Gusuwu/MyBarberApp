import { Component, OnInit } from '@angular/core';
import { TurnoViewModel } from '../view-models/turnoViewModel';
import { ApiService } from '../services/api.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-barber-calendar',
  templateUrl: './barber-calendar.page.html',
  styleUrls: ['./barber-calendar.page.scss'],
})
export class BarberCalendarPage implements OnInit {

  turnos: TurnoViewModel[] = [];
  diaSeleccionado = new Date();
  idBarbero = 0;
  constructor(private apiService: ApiService, private loginService : LoginService) { }

  async ngOnInit() {
  this.idBarbero = this.loginService.usuarioLog.id;

  await this.apiService.getTurnosByBarbero(this.idBarbero, this.diaSeleccionado).subscribe(turnos => {
    this.turnos = turnos;
  });

  }

  onDateChange(event: any) {
    this.diaSeleccionado = new Date(event.detail.value);
  }

  async buscarTurnos() {
    await this.apiService.getTurnosByBarbero(this.idBarbero, this.diaSeleccionado).subscribe(turnos => {
      this.turnos = turnos;
    });
  }

}
