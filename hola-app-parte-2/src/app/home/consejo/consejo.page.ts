import { Component } from '@angular/core';
import { IonCard, IonCardContent } from '@ionic/angular';

// La ruta hija: solo el contenido, SIN ion-header. Se muestra incrustada
// dentro de home, en su <router-outlet>.
@Component({
  selector: 'app-consejo',
  templateUrl: './consejo.page.html',
  styleUrls: ['./consejo.page.scss'],
  imports: [IonCard, IonCardContent],
})
export class ConsejoPage {}
