

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/booknow';

@Injectable({
  providedIn: 'root'
})
export class BooknowService {
  private baseUrl:string="http://localhost:8081/saisagar"
  constructor(private http:HttpClient) { }
  newBooknow(b:Book):Observable<Book>
  {
    return this.http.post<Book>(${this.baseUrl}+"/book",b);
  }
  getAll():Observable<Book[]>
  {
    return this.http.get<Book[]>(${this.baseUrl}/book);
  }
  deleteBooknow(id:any):Observable<any>
  {
    return this.http.delete(this.baseUrl+"/book/"+id)
  }
  searchBooknow(id:any):Observable<Book>
  {
    return this.http.get<Book>(this.baseUrl+"/book/"+id)
  }
  updateBooknow(id:any,b:Book):Observable<Book>
  {
    return this.http.put<Book>(this.baseUrl+"/book/"+id,b)
  }
  getAllType():Observable<string[]>
  {
    return this.http.get<string[]>(this.baseUrl+"/type")
  }
  getAllPType(t:string):Observable<Book[]>
  {
    return this.http.get<Book[]>(this.baseUrl+"/bookt/"+t)
  }
}
