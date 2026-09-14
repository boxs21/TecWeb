import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule, // habilita [(ngModel)]
    RouterLink, // habilita routerLink
  ],
})
export class HomePage {
  nombre = ''; // se conecta con el input
  saludo = ''; // lo que mostramos al apretar el botón
  ciudad = ''; // se conecta con el input

  saludar() {
    this.saludo = `Hola ${this.nombre} de ${this.ciudad} !`;
  }
}
