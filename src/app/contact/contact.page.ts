import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  form : FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private loginService: LoginService) {
    this.form = this.formBuilder.group({
      correo: ['', Validators.required],
      nombre: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  back(){
    window.history.back();
  }

  openWhatsApp() {
    const phoneNumber = '+5493624008003'; // Reemplaza con el número de teléfono adecuado
    const message = 'Hola, tengo una cosulta sobre la barberia.'; // Reemplaza con tu mensaje
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  openMail() {
    const email = 'augustoerrobidarte@gmail.com';
    const subject = 'Consulta sobre Salinas Barber'; // Reemplaza con el asunto del correo
    const body = 'Hola, tengo una consulta sobre la barberia'; // Reemplaza con el cuerpo del correo
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  }

  sendMail(){
    if (this.form.valid) {
    const formData = this.form.value;
      this.apiService.sendMail(formData);
    }  
  }
  
}
