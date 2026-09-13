import { Component, Input } from '@angular/core';
import { Perro } from '../../services/perros.service';

@Component({
  selector: 'app-tarjeta-perro',
  templateUrl: 'tarjeta-perro.component.html',
  styleUrls: ['tarjeta-perro.component.scss'],
  standalone: true,
  // TODO: importa aquí los componentes de Ionic que uses en el template
  // (por ejemplo IonCard, IonCardHeader, IonCardTitle, IonBadge…).
  imports: [],
})
export class TarjetaPerroComponent {
  // La tarjeta recibe el perro desde la página que la use.
  @Input() perro!: Perro;
}
