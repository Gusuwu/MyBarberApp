import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../classes/Item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-wizard-sign-up-step-place',
  templateUrl: './wizard-sign-up-step-place.component.html',
  styleUrls: ['./wizard-sign-up-step-place.component.scss'],
})
export class WizardSignUpStepPlaceComponent  implements OnInit {

  @Output() backStep = new EventEmitter<any>();
  @Output() finishStep = new EventEmitter<any>();

  form: FormGroup;
  servicio: string = '';
  notas: string = '';
  
  itemsDias: Item[] = [
    { id: 1, name: 'Lunes', checked: false },
    { id: 2, name: 'Martes', checked: false },
    { id: 3, name: 'Miercoles', checked: false },
    { id: 4, name: 'Jueves', checked: false },
    { id: 5, name: 'Viernes', checked: false },
    { id: 6, name: 'Sabado', checked: false },
  ];
  itemsHorarios: Item[] = [
    { id: 1, name: '9:00 - 12:00', checked: false },
    { id: 2, name: '16:00 - 22:00', checked: false },
  ];

  horarios: number[] = [];
  dias: number[] = [];

  constructor(private route : Router, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      servicio: [''],
      notas: [''],
    });
  }

  ngOnInit() {}

  cancel(){
    this.backStep.emit();
  }

  onNextClick() {
      //this.servicio = this.form.get('servicio')?.value; //no es necesario ya que el servicio se actualiza cuando se lo cambia
      this.notas = this.form.get('notas')?.value
      this.horarios = this.getSelectedIds(this.itemsHorarios);
      this.dias = this.getSelectedIds(this.itemsDias);
      this.finishStep.emit();
      
  }

  onChangeServicio() {
    //cambio el valor del servicio seleccionado y lo guardamos la variable
    this.servicio = this.form.get('servicio')?.value;
  }

  getSelectedIds(items: Item[]): number[] { //recibo un arreglo de items y retorno un arreglo number con los ids
    // filtro por items con checked en true y mapeo las id del item en true
    return items.filter(item => item.checked).map(item => item.id);
  }

}
