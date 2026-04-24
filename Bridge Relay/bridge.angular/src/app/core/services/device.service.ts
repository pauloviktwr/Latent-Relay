import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/devices';

  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiUrl);
  }

  getById(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.apiUrl}/${id}`);
  }

  create(payload: Device): Observable<Device> {
    return this.http.post<Device>(this.apiUrl, payload);
  }

  update(id: number, payload: Device): Observable<Device> {
    return this.http.put<Device>(`${this.apiUrl}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
