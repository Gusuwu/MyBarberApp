import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginViewModel } from '../view-models/loginViewModel';
import { ApiService } from '../services/api.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  usuario: string = '';
  contrasena: string = ''; 

  constructor(private route: Router, private formBuilder: FormBuilder, private apiService: ApiService, private userService: LoginService) {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  register(){
    this.route.navigateByUrl('sign-up');
  }

  async login(){
    this.markAllTouched();
    this.getLoginFormData();
    if(this.form.valid){
      let login = new LoginViewModel();
      login.usuario = this.usuario;
      login.contrasena = this.contrasena;
      await this.apiService.login(login).subscribe(usuarioLog => {
        if (usuarioLog && usuarioLog.token) {
          this.userService.guardarUsuario(usuarioLog);
          this.userService.guardarToken(usuarioLog.token);
          console.log(this.userService.usuarioLog);
          this.route.navigate(['/home']);
        }
      });
    }    
  }

  getLoginFormData(){
    this.usuario = this.form.get('usuario')?.value;
    this.contrasena = this.form.get('contrasena')?.value
  }

  markAllTouched(){
    this.form.get('usuario')?.markAsTouched();
    this.form.get('contrasena')?.markAsTouched();
  }

}
