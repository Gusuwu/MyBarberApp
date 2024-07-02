import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent  implements OnInit {

  @Input() titulo = '';
  @Input() texto = '';

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  async openModal(titulo: string, texto: string) {
    this.titulo = titulo;
    this.texto = texto;
  }

}
