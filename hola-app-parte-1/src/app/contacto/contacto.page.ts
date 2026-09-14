import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, CommonModule, FormsModule]
})
export class ContactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}