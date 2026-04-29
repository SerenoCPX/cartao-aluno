import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRange,
  IonButton,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonRange,
    IonButton,
    IonItem,
    IonLabel,
    FormsModule,
    CommonModule,
    RouterLink
  ]
})
export class SobrePage {

  r = 0;
  g = 0;
  b = 0;

  buttonColor = 'rgb(56, 150, 212)';
  backgroundColor = 'white'; // 🔥 IMPORTANTE

  mudarCorBotao() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    this.buttonColor = `rgb(${r}, ${g}, ${b})`;
  }

  mudarFundo() {
    this.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  resetarCores() {
    this.backgroundColor = 'white';
    this.buttonColor = '';
  }

}