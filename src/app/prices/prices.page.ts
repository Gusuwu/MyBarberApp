import { Component, OnInit } from '@angular/core';
import { PrecioViewModel } from '../view-models/precioViewModel';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.page.html',
  styleUrls: ['./prices.page.scss'],
})
export class PricesPage implements OnInit {

  precios : PrecioViewModel[] = [];

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    await this.apiService.getPrecios().subscribe((data: PrecioViewModel[]) => {
      this.precios = data;
    })
  }

}
