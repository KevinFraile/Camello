import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

 
  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom', message:string, color:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      color: color
    });

    await toast.present();
  }

  username: string = '';
  password: string = '';

  onSubmit(): void {
    if (this.username && this.password) {
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);
      // Aquí puedes agregar la lógica para iniciar sesión
    } else {
      this.presentToast('top', 'Por favor, completa todos los campos.', "danger")
    }
  }
}


