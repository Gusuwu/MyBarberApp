import { Component, OnInit } from '@angular/core';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  usuario: UsuarioViewModel = new UsuarioViewModel;
  imagen: string = '';
  loaded = false;

  constructor(private loginService: LoginService, private route:Router, private apiService: ApiService) { }

  async ngOnInit() {
    if(this.loginService.usuarioLog){
      await this.apiService.getUsuario(this.loginService.usuarioLog.id).subscribe(
        (usuario) => {
          this.usuario = usuario;
          if (this.usuario.foto) {
            this.imagen = 'data:image/jpeg;base64,' + this.usuario.fotoUrl;
          }
          this.loaded = true;
        }
      );      
    }
  }

  convertirArrayBufferAUrl(arrayBuffer: ArrayBuffer): string {
    const blob = new Blob([arrayBuffer], { type: 'image/*' });
    return URL.createObjectURL(blob);
  }

  closeSession(){
    this.loginService.cerrarSesion();
  }
  
  goToInfo(){
    this.route.navigateByUrl('account-info');    
  }
  edit(){
    this.route.navigateByUrl('account-edit');    
  }
  changePhoto(){
    this.route.navigateByUrl('account-photo');    
  }
  changePassword(){
    this.route.navigateByUrl('change-password');    
  }
}
