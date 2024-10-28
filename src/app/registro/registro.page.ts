import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { UserService } from '../service/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  username: string = '';
  password: string = '';
  email: string = '';
  birthdate!: number;
  cedula: string = '';
  phone: string = '';
  frontIdPhoto!: string;
  backIdPhoto!: string;
  selfieWithId!: string;


  constructor(private userService: UserService, private toastController: ToastController) { }


  onRegister() {

    // Validación de que los campos no estén vacíos
    if (

      this.username.trim() === '' ||
      this.password.trim() === '' ||
      this.email.trim() === '' ||
      this.birthdate > 17 ||
      this.cedula.trim() === '' ||
      this.phone.trim() === '' ||
      !this.frontIdPhoto ||
      !this.backIdPhoto ||
      !this.selfieWithId
    ) {
      console.error('Todos los campos son obligatorios.');
      return;
    } else {

      // JSON con los datos del usuario a enviar al backend
      let register = {
        dni: this.cedula,
        nombre: this.username,
        correo: this.email,
        edad: this.birthdate,
        telefono: this.phone,
        foto_frontal: this.frontIdPhoto,
        foto_trasera: this.backIdPhoto,
        foto_usuario: this.selfieWithId,
        contraseña: this.password
      };

      this.userService.registrar(register).subscribe((res: any) => {
        this.presentToast('top', res.message, "success")
      }, err =>{
        this.presentToast('top', 'Ha ocurrido un error.', "danger")
      })
    }


  }

  async foto(tipo: string) {

    console.log(this.frontIdPhoto);


    const image = await Camera.getPhoto({
      quality: 30,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    let imagen = 'data:image/jpeg;base64,' + image.base64String;


    if (tipo == 'front') {
      this.frontIdPhoto = imagen
    }

    if (tipo == 'back') {
      this.backIdPhoto = imagen
    }

    if (tipo == 'selfie') {
      this.selfieWithId = imagen
    }

    console.log(this.frontIdPhoto);

  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      color: color
    });

    await toast.present();
  }

}
