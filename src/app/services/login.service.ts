import { Injectable } from '@angular/core';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioLog : UsuarioViewModel = new UsuarioViewModel;
  constructor(private route: Router) {
    this.cargarUsuario(); //setear la variable usuario log ni bien se llame al servicio
   }

  cargarUsuario() {
    //tomar el usuario del storage y pasarlo a la variable
    const usuarioData = localStorage.getItem('usuarioLog');
    if (usuarioData) {
      this.usuarioLog = JSON.parse(usuarioData);
    }
  }

  guardarUsuario(usuario: UsuarioViewModel) {
    //guardo el usuario en el storage
    this.usuarioLog = usuario;
    localStorage.setItem('usuarioLog', JSON.stringify(usuario));
  }

  async guardarToken(token: string) {
    // Guarda el token en el almacenamiento local
    localStorage.setItem('token', token);
  }

  async cerrarSesion() {
    // Elimina el token del almacenamiento local
    localStorage.removeItem('token');
    this.usuarioLog = new UsuarioViewModel;
    this.route.navigateByUrl('');
  }

  isLoggedIn(): boolean {
    // Verifica si el token está presente en el almacenamiento local
    return localStorage.getItem('token') !== null;
  }
}
