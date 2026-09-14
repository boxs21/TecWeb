import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private perrosService: PerrosService,
    private router: Router,
  ) {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.perro = this.perrosService.obtener(id);
  }

  adoptar(): void {
    if (!this.perro) {
      return;
    }
    this.perrosService.adoptar(this.perro.id);
    this.perro.adoptado = true;
  }

  eliminar(): void {
    if (!this.perro) {
      return;
    }
    const confirmado = confirm(`¿Seguro que quieres eliminar a ${this.perro.nombre}? Esta acción no se puede deshacer.`);
    if (!confirmado) {
      return;
    }
    this.perrosService.eliminar(this.perro.id);
    this.router.navigateByUrl('/galeria');
  }
}
