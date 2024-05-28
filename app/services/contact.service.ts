import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl:string="http://localhost:8081/hotel/contact"
  constructor(private http:HttpClient) { }
  newContact(c:Contact):Observable<Contact>
  {
    return this.http.post<Contact>(`${this.baseUrl}`,c);
  }
 getAll():Observable<Contact[]>
 {
  return this.http.get<Contact[]>(`${this.baseUrl}`);
 }
}
