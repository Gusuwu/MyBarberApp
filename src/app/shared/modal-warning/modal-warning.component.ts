import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-warning',
  templateUrl: './modal-warning.component.html',
  styleUrls: ['./modal-warning.component.scss'],
})
export class ModalWarningComponent  implements OnInit {

  @Input() titulo = '';
  @Input() texto = '';
  @Input() noBack = false;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  async openModal(titulo: string, texto: string) {
    this.titulo = titulo;
    this.texto = texto;
  }

  goBack(){
    if(!this.noBack){
      window.history.back();
    }      
    this.dismiss();
  }

}
