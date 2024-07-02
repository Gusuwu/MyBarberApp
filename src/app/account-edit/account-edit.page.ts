import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../shared/modal/modal.component';
import { ModalController } from '@ionic/angular';
import { ModalWarningComponent } from '../shared/modal-warning/modal-warning.component';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.page.html',
  styleUrls: ['./account-edit.page.scss'],
})
export class AccountEditPage implements OnInit {

  //@ViewChild(ModalComponent) modal?: ModalComponent;

  usuario : UsuarioViewModel = new UsuarioViewModel;
  form!: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private apiService: ApiService, private route: Router, private modalController: ModalController) { 
     
  }

  async ngOnInit() {
    await this.apiService.getUsuario(this.loginService.usuarioLog.id).subscribe(u => {
      this.usuario = u;
      this.form = this.formBuilder.group({
        usuario: [this.usuario.usuario, Validators.required],
        correo: [this.usuario.correo, [Validators.required, Validators.email]],
        nombre: [this.usuario.nombre, Validators.required],
        telefono: [this.usuario.telefono, Validators.required],
        notas: [this.usuario.notas, Validators.required],
      });
    });  
  }

  async cancel(){
    if(this.form.dirty){
      const modal = await this.modalController.create({
        component: ModalWarningComponent,
        backdropDismiss: false,
        componentProps: {
          titulo: 'Estas seguro?',
          texto: 'Todos tus cambios se perderan.'     
        }
      });
      return await modal.present();
    }else{
      window.history.back();
    }
  }

  markAllTouched(){
    //marcar todos los inputs del form como seleccionados
    this.form.get('usuario')?.markAsTouched();
    this.form.get('correo')?.markAsTouched();
    this.form.get('nombre')?.markAsTouched();
    this.form.get('telefono')?.markAsTouched();
    this.form.get('notas')?.markAsTouched();
  }

  save(){
    this.markAllTouched(); //marco todos los inputs
    if (this.form.valid) {
      let user = new UsuarioViewModel;
      user.id = this.usuario.id;
      user.nombre = this.form.get('nombre')?.value;
      user.usuario = this.form.get('usuario')?.value;
      user.correo = this.form.get('correo')?.value;
      user.telefono = this.form.get('telefono')?.value;
      user.notas = this.form.get('notas')?.value;
      this.apiService.updateUsuario(user).subscribe((data) => {
        // Puedes redirigir al usuario o mostrar un mensaje de éxito aquí
        this.route.navigateByUrl('account');
      }, error => {
        console.error('Error al actualizar el usuario', error);
        // Manejar el error adecuadamente
      });
    }
  }

}
