import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ApiService } from '../services/api.service';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';

@Component({
  selector: 'app-account-photo',
  templateUrl: './account-photo.page.html',
  styleUrls: ['./account-photo.page.scss'],
})
export class AccountPhotoPage implements OnInit {

  usuario: UsuarioViewModel = new UsuarioViewModel;
  image : string = "";
  selectedFile: File | null = null;

  constructor(private loginService: LoginService, private apiService: ApiService) { 
    apiService.getUsuario(loginService.usuarioLog.id).subscribe(data => {
      this.usuario = data;
      if(this.usuario.foto){
        this.image = 'data:image/jpeg;base64,' + this.usuario.fotoUrl;
      }
    })
  }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  onUpload() {

    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    this.apiService.cambiarImagen(this.usuario.id, this.selectedFile).subscribe(
      response => {
        console.log('Image uploaded successfully');
      },
      error => {
        console.error('Error uploading image:', error);
      }
    );

  }

  arrayBufferToBase64(buffer: ArrayBuffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
}
