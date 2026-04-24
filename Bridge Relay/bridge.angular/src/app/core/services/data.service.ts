import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/data';

  getAll(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }

  getById(id: number): Observable<Data> {
    return this.http.get<Data>(`${this.apiUrl}/${id}`);
  }

  create(payload: Data): Observable<Data> {
    return this.http.post<Data>(this.apiUrl, payload);
  }

  update(id: number, payload: Data): Observable<Data> {
    return this.http.put<Data>(`${this.apiUrl}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
