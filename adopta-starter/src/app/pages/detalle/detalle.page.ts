import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonBadge,
  IonButton,
} from '@ionic/angular/standalone';
import { PerrosService, Perro } from '../../services/perros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonBadge,
    IonButton,
  ],
})
export class DetallePage {
  perro?: Perro;

  constructor(route: ActivatedRoute, perrosService: PerrosService) {
    const id = route.snapshot.paramMap.get('id') ?? '';
    this.perro = perrosService.obtener(id);
  }
}
