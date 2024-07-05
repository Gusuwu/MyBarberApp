import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { LoginService } from '../services/login.service';
import { ApiService } from '../services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario : UsuarioViewModel = new UsuarioViewModel();
  loaded = false;

  constructor(private route: Router, private userService: LoginService, private apiService: ApiService, private location: Location) { 
  }

  ngOnInit() {
    //this.loadData();
  }

  ionViewWillEnter() {
    this.loadData();
    this.loaded = true;
  }

  async loadData(){
    if(this.userService.usuarioLog){
          this.usuario = this.userService.usuarioLog;    
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
