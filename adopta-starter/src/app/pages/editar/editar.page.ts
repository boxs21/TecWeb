import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonTextarea,
  IonToggle,
  IonButton,
} from '@ionic/angular/standalone';
import { PerrosService, Perro } from '../../services/perros.service';

@Component({
  selector: 'app-editar',
  templateUrl: 'editar.page.html',
  styleUrls: ['editar.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonTextarea,
    IonToggle,
    IonButton,
    FormsModule,
  ],
})
export class EditarPage implements OnInit {
  perro?: Perro;

  constructor(
    private route: ActivatedRoute,
    private perrosService: PerrosService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    const perro = this.perrosService.obtener(id);
    // Copia el objeto para no mutar el original hasta guardar.
    this.perro = perro ? { ...perro } : undefined;
  }

  guardar(): void {
    if (!this.perro || !this.perro.nombre.trim()) {
      return;
    }
    this.perrosService.editar(this.perro);
    this.router.navigateByUrl('/detalle/' + this.perro.id);
  }
}
