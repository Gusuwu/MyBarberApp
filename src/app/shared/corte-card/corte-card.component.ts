import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CorteViewModel } from 'src/app/view-models/corteViewModel';

@Component({
  selector: 'app-corte-card',
  templateUrl: './corte-card.component.html',
  styleUrls: ['./corte-card.component.scss'],
})
export class CorteCardComponent  implements OnChanges {

  @Input() corte : CorteViewModel = new CorteViewModel;
  image = '';

  constructor() { }
  
  ngOnChanges(): void {
    if (this.corte.foto) {
      this.image = this.convertirArrayBufferAUrl(this.corte.foto);
    }
  }

  convertirArrayBufferAUrl(arrayBuffer: ArrayBuffer): string {
    const blob = new Blob([arrayBuffer], { type: 'image/*' });
    return URL.createObjectURL(blob);
  }

}
