import { Component, OnInit } from '@angular/core';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { LoginService } from '../services/login.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {

  usuario: UsuarioViewModel = new UsuarioViewModel;
  loaded = false;

  constructor(private loginService: LoginService, private apiService: ApiService) { }

  async ngOnInit() {
    if(this.loginService.usuarioLog){
      await this.apiService.getUsuario(this.loginService.usuarioLog.id).subscribe(
        (usuario) => {
          this.usuario = usuario;
          this.loaded = true;
        }
      );      
    }
  }

}
