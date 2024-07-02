import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { WizardSignUpStepAccountComponent } from '../wizard-sign-up-step-account/wizard-sign-up-step-account.component';
import { WizardSignUpStepPlaceComponent } from '../wizard-sign-up-step-place/wizard-sign-up-step-place.component';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wizard-sign-up',
  templateUrl: './wizard-sign-up.component.html',
  styleUrls: ['./wizard-sign-up.component.scss'],
})
export class WizardSignUpComponent  implements OnInit {
  currentStep = 1;
  userDatos : UsuarioViewModel = new UsuarioViewModel;
  @ViewChild('accountComponent') accountComponent!: WizardSignUpStepAccountComponent;
  @ViewChild('preferenceComponent') preferenceComponent!: WizardSignUpStepPlaceComponent;
  //tipoUsuario = '';
  
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  changeStep(step: number) {
    if(step == 2 ){
      this.accountComponent.onNextClick();
    }else this.currentStep = step;
  }

  goToStep2() {
    //this.tipoUsuario = tipoUsuario;
    this.currentStep = 2; 
    this.userDatos.nombre = this.accountComponent.nombre;
    this.userDatos.correo = this.accountComponent.correo;
    this.userDatos.usuario = this.accountComponent.usuario;
    this.userDatos.telefono = this.accountComponent.telefono;
    this.userDatos.contrasena = this.accountComponent.contrasena;
  }

  finishStep(){
    
    this.userDatos.servicio = this.preferenceComponent.servicio;
    this.userDatos.notas = this.preferenceComponent.notas;
    this.userDatos.dias = this.preferenceComponent.dias;
    this.userDatos.horarios = this.preferenceComponent.horarios;

    this.apiService.postUsuario(this.userDatos).subscribe(() => {
      console.log('Usuario creado correctamente');
      // Realiza acciones adicionales después de crear el usuario, como redirigir a otra página
      this.currentStep = 3;
    },
    error => {
      console.error('Error al crear usuario:', error);
      // Maneja el error de manera apropiada, por ejemplo, mostrando un mensaje de error al usuario
    }
  );

  }

  goToLogin(){
    this.router.navigateByUrl('');
  }
}
