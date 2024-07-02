export class UsuarioViewModel {
    id: number = 0;
    usuario: string = '';
    nombre: string = '';
    contrasena: string = '';
    telefono: number = 0;
    correo: string = '';
    dias: number[] = [];
    horarios: number[] = [];
    servicio: string = '';
    notas: string = '';
    role: number = 0;
    foto: ArrayBuffer | null = null;
    token: string = '';
    fotoUrl: string = '';
}