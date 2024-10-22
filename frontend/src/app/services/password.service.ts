import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Password } from '../models/password';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private apiUrl = 'http://localhost:8000/api/passwords/';

  constructor(private http: HttpClient) { }

  getPasswords(): Observable<Password[]> {
    return this.http.get<Password[]>(this.apiUrl);
  }

  addPassword(password: Password): Observable<Password> {
    return this.http.post<Password>(this.apiUrl, password);
  }

  updatePassword(id: number, password: Password): Observable<Password> {
    return this.http.put<Password>(`${this.apiUrl}${id}/`, password);
  }

  deletePassword(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
