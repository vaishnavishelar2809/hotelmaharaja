import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
private baseUrl:string="http://localhost:8081/hotel/register"
  constructor(private http:HttpClient) { }
  newUser(reg:Register):Observable<Register>
  {
    return this.http.post<Register>(`${this.baseUrl}`,reg);
  }
  login(reg: Register):Observable<Register> {
    return this.http.get<Register>(`${this.baseUrl}`+"/"+reg.email+"/"+reg.password);
  }
  getAll():Observable<Register[]>
  {
    return this.http.get<Register[]>(`${this.baseUrl}`);
  }

}
