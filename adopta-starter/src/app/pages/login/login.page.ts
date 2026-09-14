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
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
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
export class LoginPage {
  correo = '';
  clave = '';
  error = '';

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  entrar(): void {
    this.error = '';
    if (!this.correo.trim() || !this.clave.trim()) {
      return;
    }
    const ok = this.usuariosService.login(this.correo.trim(), this.clave);
    if (ok) {
      this.router.navigateByUrl('/galeria');
    } else {
      this.error = 'Correo o clave incorrectos.';
    }
  }
}
