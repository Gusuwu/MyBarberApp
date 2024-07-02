import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.loginService.isLoggedIn()) {
        //si esta logeado se queda en la url
        return true;
      } else {
        // Redirige al usuario a la página de inicio de sesión si no está logeado
        return this.router.createUrlTree(['']);
      }
  }

  canLoad( //metodo para rutas lazy loaded y evitar que el modulo cargue antes de verificar el token de logeo
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      // Redirige al usuario a la página de inicio de sesión si no está autenticado
      this.router.navigate(['']);
      return false;
    }
  }
  
}
