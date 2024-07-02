import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { UsuarioViewModel } from '../view-models/usuarioViewModel';

@Component({
  selector: 'app-barbers',
  templateUrl: './barbers.page.html',
  styleUrls: ['./barbers.page.scss'],
})
export class BarbersPage implements OnInit {

  barberos: UsuarioViewModel[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBarberos().subscribe((data: UsuarioViewModel[]) => {
      this.barberos = data;
    });
  }
  
}
