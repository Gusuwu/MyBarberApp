import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioViewModel } from 'src/app/view-models/usuarioViewModel';

@Component({
  selector: 'header-barber',
  templateUrl: './header-barber.component.html',
  styleUrls: ['./header-barber.component.scss'],
})
export class HeaderBarberComponent  implements OnInit {

  @Input() usuario: UsuarioViewModel = new UsuarioViewModel;
  @Input() showBack: boolean = true;
  @Input() showAccount: boolean = true;

  constructor(private route: Router) { }

  ngOnInit() {}

  back(){
    window.history.back();
  }

  myAccount(){
    this.route.navigateByUrl('account');
  }
}
