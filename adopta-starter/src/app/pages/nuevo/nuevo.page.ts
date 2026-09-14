import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton} from '@ionic/angular/standalone';
import { PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: 'nuevo.page.html',
  styleUrls: ['nuevo.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, FormsModule],

})

export class NuevoPage {
  nombre: string = '';
  raza: string = '';
  edad: string = '';
  sexo: string = '';
  tamano: string = '';
  constructor(private perrosService: PerrosService, private router: Router) {}

  guardar() {
    if (!this.nombre.trim()) {
      return;
    }
    const nuevoPerro = {
      id: Date.now(), // Genera un ID único basado en la fecha y hora actual
      nombre: this.nombre,
      tipo: 'Perro', // Asumimos que siempre es un perro
      raza: this.raza,
      edad: this.edad,
      sexo: this.sexo,
      tamano: this.tamano,
      vacunada: false, // Por defecto, asumimos que no está vacunado
      descripcion: '', // Puedes agregar un campo de descripción si lo deseas
      foto: 'https://placedog.net/600/600?id=' + Date.now(), // foto de relleno
      adoptado: false, // Por defecto, asumimos que no está adoptado
    };
    this.perrosService.agregar(nuevoPerro);
    this.router.navigateByUrl('/galeria');
  }
}