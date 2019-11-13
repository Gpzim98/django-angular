import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://35.235.59.6:8000/';
  token = 'Token 705a5b3a63b0bbe6b857f1e403a9b96d87675830';
  
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token);
  constructor(private http: HttpClient) { }

  getMember(id) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/', 
    {headers: this.httpHeaders});
  };

  updateMember(member) : Observable<any> {
    let body = { name: member.name, surname: member.surname, 
      phone: member.phone}; 
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body,
    {headers: this.httpHeaders});
  };

  deleteMember(id) : Observable<any> {
    return this.http.delete(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };

}
