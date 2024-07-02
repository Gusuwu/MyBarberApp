import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioViewModel } from '../view-models/usuarioViewModel';
import { PrecioViewModel } from '../view-models/precioViewModel';
import { CorteViewModel } from '../view-models/corteViewModel';
import { LoginViewModel } from '../view-models/loginViewModel';
import { TurnoViewModel } from '../view-models/turnoViewModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrlUsuarios = 'http://localhost:5000/Usuario/GetUsuarios'; // URL de tu API para usuarios
  private apiUrlBarberos = 'http://localhost:5000/Usuario/GetBarberos';
  private apiUrlPrecios = 'http://localhost:5000/Precio';
  private apiUrlCortes = 'http://localhost:5000/Corte/GetCortes';
  private apiUrlUsuario = 'http://localhost:5000/Usuario';
  private apiUrlTurno = 'http://localhost:5000/Turno';
  private apiUrlMail = 'http://localhost:5000/Mail'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<UsuarioViewModel[]> {
    return this.http.get<UsuarioViewModel[]>(this.apiUrlUsuarios);
  }

  getBarberos(): Observable<UsuarioViewModel[]> {
    return this.http.get<UsuarioViewModel[]>(this.apiUrlBarberos);
  }

  getPrecios(): Observable<PrecioViewModel[]> {
    return this.http.get<PrecioViewModel[]>(this.apiUrlPrecios);
  }

  updatePrecio(precio: PrecioViewModel): Observable<any> {
    return this.http.put<any>(`${this.apiUrlPrecios}/UpdatePrecio`, precio);
  }
  naPrecio(precio: PrecioViewModel): Observable<any> {
    return this.http.put<any>(`${this.apiUrlPrecios}/NaPrecio`, precio);
  }

  getCortes(): Observable<CorteViewModel[]> {
    return this.http.get<CorteViewModel[]>(this.apiUrlCortes);
  }
  
  postUsuario(usuario: UsuarioViewModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrlUsuario}/PostUsuario`, usuario);
  }

  updateUsuario(usuario: UsuarioViewModel): Observable<any> {
    return this.http.put<any>(`${this.apiUrlUsuario}/UpdateUsuario`, usuario);
  }

  getUsuario(id: number): Observable<UsuarioViewModel> {
    return this.http.get<UsuarioViewModel>(`${this.apiUrlUsuario}/GetUsuario/${id}`);
  }

  login(usuario: LoginViewModel): Observable<UsuarioViewModel> {
    return this.http.post<UsuarioViewModel>(`${this.apiUrlUsuario}/LoginUsuario`, usuario);
  }

  cambiarImagen(id: number, image: File) {
    const file = new FormData();
    file.append('file', image);

    return this.http.post(`http://localhost:5000/Usuario/UploadImage/${id}`, file);
  }

  checkDisponibilidad(idBarbero: number, dia: Date, horario: string): Observable<boolean> {
    let diaObj = new Date(dia);
    let params = new HttpParams()
      .set('idBarbero', idBarbero.toString())
      .set('dia', diaObj.toISOString())
      .set('horario', horario);

    return this.http.get<boolean>(`${this.apiUrlTurno}/CheckDisponibilidad`, { params });
  }

  postTurno(turno: TurnoViewModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrlTurno}/PostTurno`, turno);
  }

  getTurnosByUsuario(id: number): Observable<TurnoViewModel[]> {
    return this.http.get<TurnoViewModel[]>(`${this.apiUrlTurno}/GetTurnosByUsuario/${id}`);
  }

  getTurnosByBarbero(id: number, dia: Date): Observable<TurnoViewModel[]> {
    let params = new HttpParams()
      .set('id', id.toString())
      .set('dia', dia.toISOString()); // Formato de fecha a 'YYYY-MM-DD'
  
    return this.http.get<TurnoViewModel[]>(`${this.apiUrlTurno}/GetTurnosByBarbero`, { params });
  }
  
  sendMail(formData: any){
      this.http.post<any>(`${this.apiUrlMail}/sendMail`, formData)
  }
  
}
