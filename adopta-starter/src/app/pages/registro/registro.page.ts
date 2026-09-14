import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    IonText,
    FormsModule,
    RouterLink,
  ],
})
export class RegistroPage {
  correo = '';
  clave = '';
  error = '';

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  registrar(): void {
    this.error = '';
    if (!this.correo.trim() || !this.clave.trim()) {
      return;
    }
    const ok = this.usuariosService.registrar(this.correo.trim(), this.clave);
    if (ok) {
      this.router.navigateByUrl('/login');
    } else {
      this.error = 'Ese correo ya está registrado.';
    }
  }
}
