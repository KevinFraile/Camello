import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loader = true

 
  constructor(private toastController: ToastController, private userService:UserService,  private router:Router) {

    setTimeout(() => {
      this.loader = false
    }, 1000);
    
  }
  

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

    this.loader = true

    if (this.username && this.password) {
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password );
      // Aquí puedes agregar la lógica para iniciar sesión

      this.userService.login(this.username, this.password).subscribe((res:any) =>{
        
        localStorage.setItem('token', res.data)
        localStorage.setItem('user_name', res.nombre)
        this.loader = false
        this.router.navigate(['/pages/home'])
        
      }, err =>{
        this.presentToast('top', err.error.message, "danger")
        this.loader = false

        
      })


    } else {
      this.presentToast('top', 'Por favor, completa todos los campos.', "danger")
      this.loader = false
    }
  }
}


