import { Injectable } from '@angular/core';

export interface Usuario {
  correo: string;
  clave: string;
}

// Servicio en memoria: no hay servidor ni base de datos, y la clave se
// guarda tal cual. Esto es un ejercicio de pantallas y navegación, no un
// login de verdad — nada de esto sirve para proteger algo real.
@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private usuarios: Usuario[] = [];
  private correoActual: string | null = null;

  registrar(correo: string, clave: string): boolean {
    const yaExiste = this.usuarios.some(u => u.correo === correo);
    if (yaExiste) {
      return false;
    }
    this.usuarios.push({ correo, clave });
    return true;
  }

  login(correo: string, clave: string): boolean {
    const usuario = this.usuarios.find(u => u.correo === correo && u.clave === clave);
    if (!usuario) {
      return false;
    }
    this.correoActual = usuario.correo;
    return true;
  }

  logout(): void {
    this.correoActual = null;
  }

  estaAutenticado(): boolean {
    return this.correoActual !== null;
  }

  usuarioActual(): string | null {
    return this.correoActual;
  }
}
