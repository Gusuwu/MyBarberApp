import { Component, OnInit } from '@angular/core';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  usuario: UsuarioViewModel = new UsuarioViewModel;
  imagen: string = '';

  constructor(private loginService: LoginService, private route:Router) { }

  ngOnInit() {
    if(this.loginService.usuarioLog){
      this.usuario = this.loginService.usuarioLog;
      if (this.usuario.foto) {
        this.imagen = 'data:image/jpeg;base64,' + this.usuario.fotoUrl;
      }
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
