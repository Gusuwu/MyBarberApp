import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard-sign-up-step-account',
  templateUrl: './wizard-sign-up-step-account.component.html',
  styleUrls: ['./wizard-sign-up-step-account.component.scss'],
})
export class WizardSignUpStepAccountComponent  implements OnInit {

  @Output() nextStep = new EventEmitter<string>();
  tipoUsuario = '';
  usuario = '';
  correo = '';
  nombre = '';
  telefono = 0;
  contrasena = '';

  form: FormGroup;
  
  constructor(private route : Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      contraseña: ['', Validators.required],
      repetirContraseña: ['', Validators.required],
      //tipoUsuario: ['', Validators.required],
    });
   }

  ngOnInit() {}

  onNextClick() {
    this.markAllTouched(); //marco todos los inputs
    if (this.form.valid) {
      if(this.equalPassword()){
        this.nombre = this.form.get('nombre')?.value;
        this.correo = this.form.get('correo')?.value;
        this.usuario = this.form.get('usuario')?.value;
        this.telefono = this.form.get('telefono')?.value;
        this.contrasena = this.form.get('contraseña')?.value;
        this.nextStep.emit(); //emito el valor de usuario como parametro y me dirijo al siguiente paso
      }     
    } else {
      console.log('complete el formulario')
    }
  }
/*
  onChangeTipoUsuario() {
    //el cambio de valor en el tipo de usuario
    this.tipoUsuario = this.form.get('tipoUsuario')?.value;
  }
*/
  cancel(){
    this.route.navigateByUrl('');
  }

  equalPassword(){
    //metodo para fijarme que las contrasenas sean iguales
    if(this.form.get('contraseña')?.value == this.form.get('repetirContraseña')?.value){
      return true;
    }else{
      return false;
    }
  }

  markAllTouched(){
    //marcar todos los inputs del form como seleccionados
    this.form.get('usuario')?.markAsTouched();
    this.form.get('correo')?.markAsTouched();
    this.form.get('nombre')?.markAsTouched();
    this.form.get('telefono')?.markAsTouched();
    this.form.get('contraseña')?.markAsTouched();
    this.form.get('repetirContraseña')?.markAsTouched();
    //this.form.get('tipoUsuario')?.markAsTouched();
  }

}
