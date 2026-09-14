import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, RouterLink],
})
export class EncabezadoComponent {
  @Input() titulo = 'Mi App';
  @Input() volverA?: string;
  @Input() color = 'primary'; // paso: color distinto por página
  @Input() subtitulo?: string; // paso: opcional, solo se ve si te lo pasan
  @Input() mostrarAcerca = true; // desafío: se apaga en la propia página Acerca
}