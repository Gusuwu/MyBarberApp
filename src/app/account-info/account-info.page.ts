import { Component, OnInit } from '@angular/core';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {

  usuario: UsuarioViewModel = new UsuarioViewModel;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    if(this.loginService.usuarioLog){
      this.usuario = this.loginService.usuarioLog;
    }
  }

}
