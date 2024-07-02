import { Component, OnInit } from '@angular/core';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ApiService } from '../services/api.service';
import { TurnoViewModel } from '../view-models/turnoViewModel';

@Component({
  selector: 'app-my-turnos',
  templateUrl: './my-turnos.page.html',
  styleUrls: ['./my-turnos.page.scss'],
})
export class MyTurnosPage implements OnInit {

  usuario : UsuarioViewModel = new UsuarioViewModel();
  turnos : TurnoViewModel[] = []  ;

  constructor(private route: Router, private userService: LoginService, private apiService: ApiService) { }

  async ngOnInit() {
    const usuario = this.userService.usuarioLog;
    if (usuario) {
      this.usuario = usuario;
    }
    await this.apiService.getTurnosByUsuario(usuario.id).subscribe(turnos => {
      this.turnos = turnos;
    });
  }

}
