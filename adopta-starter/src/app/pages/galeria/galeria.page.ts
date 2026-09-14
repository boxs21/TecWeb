import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonLabel } from '@ionic/angular/standalone';
import { PerrosService, Perro } from '../../services/perros.service';
import { UsuariosService } from '../../services/usuarios.service';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, TarjetaPerroComponent, IonButton, IonButtons, IonLabel, RouterLink],
})
export class GaleriaPage {
  perros: Perro[];

  constructor(
    private perrosService: PerrosService,
    private usuariosService: UsuariosService,
    private router: Router,
  ) {
    this.perros = this.perrosService.todas();
  }

  get correoActual(): string | null {
    return this.usuariosService.usuarioActual();
  }

  salir(): void {
    this.usuariosService.logout();
    this.router.navigateByUrl('/login');
  }
}
