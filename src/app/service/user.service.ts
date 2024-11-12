import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'https://zlock.com.co:4250'

  constructor(private http: HttpClient) {
  }

  private get header_oauth() {
    return {
      headers: {
        'Authorization': localStorage.getItem('token') || ''
      }
    }
  }

  registrar(body:any) {


    let query = `${this.URL}/camello/register`
    return this.http.post(query, body, {})
  }

  login(correo:string, contrasena: string){
    // let headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // })

    const query = `${this.URL}/camello/login`
    return this.http.post(query, { correo, contrasena })
  }


}
