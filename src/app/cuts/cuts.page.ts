import { Component, OnInit } from '@angular/core';
import { CorteViewModel } from '../view-models/corteViewModel';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cuts',
  templateUrl: './cuts.page.html',
  styleUrls: ['./cuts.page.scss'],
})
export class CutsPage implements OnInit {

  cortes: CorteViewModel[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCortes().subscribe( (data) =>{ 
      this.cortes = data;
    });
  }
  

}
