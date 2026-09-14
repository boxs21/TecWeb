import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
  imports: [IonContent, EncabezadoComponent],
})
export class AcercaPage {}
