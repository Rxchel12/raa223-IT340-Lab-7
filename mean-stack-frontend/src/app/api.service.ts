import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export interface ApiResponse { message: string; }

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}
  getHello() {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/api/hello`);
  }
}
