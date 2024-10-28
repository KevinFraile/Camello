import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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


    let query = `https://zlock.com.co:4250/camello/register`
    return this.http.post(query, body, {})
  }

}
