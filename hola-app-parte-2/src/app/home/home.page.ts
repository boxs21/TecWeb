import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonContent, IonItem, IonInput, IonButton } from '@ionic/angular';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule, // habilita [(ngModel)]
    RouterLink, // habilita routerLink
    RouterOutlet, // habilita <router-outlet> para la ruta hija
    EncabezadoComponent, // el encabezado del paso 3
  ],
})
export class HomePage {
  nombre = ''; // se conecta con el input
  saludo = ''; // lo que mostramos al apretar el botón

  saludar() {
    this.saludo = this.nombre ? `¡Hola, ${this.nombre}!` : '¿Cómo te llamas?';
  }
}
