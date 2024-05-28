import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminLogin } from '../models/admin-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {


  private baseUrl:string="http://localhost:8081/hotel/admin"
  constructor(private http:HttpClient) { }

  login(ad:AdminLogin):Observable<AdminLogin> {
    return this.http.get<AdminLogin>(`${this.baseUrl}`+"/"+ad.email+"/"+ad.password);
  }

}
