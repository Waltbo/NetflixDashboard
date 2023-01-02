import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL = `http://127.0.0.1:5000`
  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
   return this.http.get(`${this.baseURL}/getAll`)
}
  getPieData(): Observable<any> {
   return this.http.get(`${this.baseURL}/pieData`)
}
}
