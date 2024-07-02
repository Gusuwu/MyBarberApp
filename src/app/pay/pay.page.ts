import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  back(){
    window.history.back();
  }

  uploadDoc(){
      const phoneNumber = '+5493624008003'; // Reemplaza con el número de teléfono adecuado
      const message = 'Hola, voy a subir el comprobante de pago para mi turno!.'; // Reemplaza con tu mensaje
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank'); 
  }
}
