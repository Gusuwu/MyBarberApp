import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { PrecioViewModel } from 'src/app/view-models/precioViewModel';
import { ModalWarningComponent } from '../modal-warning/modal-warning.component';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {
  
  @Input() precio!: PrecioViewModel;
  form!: FormGroup;
  constructor(private modalController: ModalController,private formBuilder: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      precio: [this.precio.valor, Validators.required],
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async openModal(precio: PrecioViewModel) {
    this.precio = precio;
  }

  async save(){
    if (this.form.valid) {
      this.precio.valor = this.form.get('precio')?.value;
      await this.apiService.updatePrecio(this.precio).subscribe(
        (data) => {
          // Puedes redirigir al usuario o mostrar un mensaje de éxito aquí
          this.dismiss();
        }, error => {
          console.error('Error al actualizar el usuario', error);
          // Manejar el error adecuadamente
        }
      );     
    } else {
      console.log('complete el formulario')
    }
  }
  async goBack(){
    if(this.form.dirty){
      const modal = await this.modalController.create({
        component: ModalWarningComponent,
        backdropDismiss: false,
        componentProps: {
          titulo: 'Estas seguro?',
          texto: 'Todos tus cambios se perderan.',
          noBack: true
        }
      });
      this.dismiss();
      return await modal.present();
    }else{
      this.dismiss();
    }
  }
}
