import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { PrecioViewModel } from 'src/app/view-models/precioViewModel';
import { ModalComponent } from '../modal/modal.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'precio-card',
  templateUrl: './precio-card.component.html',
  styleUrls: ['./precio-card.component.scss'],
})
export class PrecioCardComponent  implements OnInit {

  @Input() precio : PrecioViewModel = new PrecioViewModel;
  image : string = '';
  isAdmin = false;
  constructor(private loginService: LoginService, private modalController: ModalController, private apiService: ApiService) {
    if(loginService.usuarioLog.role === 1){
      this.isAdmin = true;
    }
  }

  ngOnInit() {
    if(this.precio){
      if(this.precio.id === 1){
        this.image = 'assets/corte-pelo.jpg'
      }else if(this.precio.id === 3){
        this.image = 'assets/cejas.jpeg'
      }else {
        this.image = 'assets/barba.jpg'
      }
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      backdropDismiss: false,
      componentProps: {
        precio: this.precio     
      }
    });
    return await modal.present();
  }

  async notDisponible(){
    this.precio.notDisponible = !this.precio.notDisponible;
    await this.apiService.naPrecio(this.precio).subscribe(
      response => {
        console.log('Precio eliminado', response);
      },
      error => {
        console.error('Error al eliminar el precio', error);
      }
    )
  }

}
