import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { ApiService } from '../services/api.service';
import { TurnoViewModel } from '../view-models/turnoViewModel';
import { PrecioViewModel } from '../view-models/precioViewModel';
import { ModalController } from '@ionic/angular';
import { ModalConfirmComponent } from '../shared/modal-confirm/modal-confirm.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.page.html',
  styleUrls: ['./turno.page.scss'],
})
export class TurnoPage implements OnInit {

  usuario: UsuarioViewModel = new UsuarioViewModel;
  form: FormGroup;
  barberos: UsuarioViewModel[] = [];
  turno: TurnoViewModel = new TurnoViewModel;
  precios: PrecioViewModel[] = [];
  errorMessage: string = '';
  minDate = '';
  horariosDisponibles = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '16:00','16:30', '17:00','17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private modalController: ModalController, private loginService: LoginService) {
    this.usuario = loginService.usuarioLog;
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];

    this.form = this.formBuilder.group({
      barbero: ['', Validators.required],
      precio: ['', Validators.required],
      dia: [this.minDate, Validators.required],
      horario: ['', Validators.required],
    });

   }

   isDateEnabled = (date: any): boolean => {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.getDay() !== 6; 
  };
  

  async ngOnInit() {
    await this.apiService.getBarberos().subscribe(
      (barberos) => {
        this.barberos = barberos;
      }
    );
    await this.apiService.getPrecios().subscribe(
      (precios) => {
        this.precios = precios;
      }
    );
  }

  async onSubmit(){
    if (this.form.valid) {
        this.turno.idUsuario = this.usuario.id;
        this.turno.idBarbero = this.form.get('barbero')?.value;
        this.turno.idPrecio = this.form.get('precio')?.value;
        this.turno.dia = new Date(this.form.get('dia')?.value); 
        this.turno.horario = this.form.get('horario')?.value;  

       await this.apiService.checkDisponibilidad(this.turno.idBarbero, this.turno.dia, this.turno.horario).subscribe(async disponible => {
          if (disponible) {
            this.apiService.postTurno(this.turno).subscribe(async response => {
              const modal = await this.modalController.create({
                component: ModalConfirmComponent,
                backdropDismiss: false,
                componentProps: {
                  titulo: 'EXITO',
                  texto: 'El turno se agendo con exito!.'     
                }
        
              });
              window.history.back();
              return await modal.present();
            }, async error => {
              const modal = await this.modalController.create({
                component: ModalConfirmComponent,
                backdropDismiss: false,
                componentProps: {
                  titulo: 'ERROR',
                  texto: 'No se pudo agendar el turno.'     
                }
        
              });
              return await modal.present();
            });
          } else {
            const modal = await this.modalController.create({
              component: ModalConfirmComponent,
              backdropDismiss: false,
              componentProps: {
                titulo: 'ERROR',
                texto: 'Ya existe un turno registrado a ese horario y con ese barbero.'     
              }
      
            });
            return await modal.present();
          }
        });
    } else {
      const modal = await this.modalController.create({
        component: ModalConfirmComponent,
        backdropDismiss: false,
        componentProps: {
          titulo: 'ERROR',
          texto: 'Complete todos los campos antes.'     
        }

      });
      return await modal.present();
    }
  }

  markAllTouched(){
    this.form.get('barbero')?.markAsTouched();
    this.form.get('precio')?.markAsTouched();
    this.form.get('dia')?.markAsTouched();
    this.form.get('horario')?.markAsTouched();
  }

}
