import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario : UsuarioViewModel = new UsuarioViewModel();

  constructor(private route: Router, private userService: LoginService) { }

  async ngOnInit() {
    const usuario = this.userService.usuarioLog;
    if (usuario) {
      this.usuario = usuario;
    }
  }

  addTurno(){
    this.route.navigateByUrl('turno');
  }

  seePrices(){
    this.route.navigateByUrl('prices');
  }

  seeCuts(){
    this.route.navigateByUrl('cuts');
  }

  seeBarbers(){
    this.route.navigateByUrl('barbers');
  }

  goToContact(){
    this.route.navigateByUrl('contact');
  }

  goToPay(){
    this.route.navigateByUrl('pay');
  }

  seeTurnos(){
    this.route.navigateByUrl('my-turnos');
  }

  seeTurnosAdmin(){
    this.route.navigateByUrl('barber-calendar');
  }
}
