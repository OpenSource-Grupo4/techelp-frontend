import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError, Observable } from 'rxjs'; // Importa throwError

@Injectable({
  providedIn: 'root'
})
export class MyprofileApiService {
  baseUrl: string = 'https://my-json-server.typicode.com/FORASTERRO/TecHelp';
  resourceEndpoint: string = '/my-profile';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.resourcePath(), this.httpOptions);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions);
  }

  updateProfile(profile: any): Observable<any> {
    if (profile && profile.id) {
      const url = `${this.baseUrl}${this.resourceEndpoint}/${profile.id}`;
      return this.http.put(url, profile, this.httpOptions);
    } else {
      return throwError('ID de perfil no válido');
    }
  }

  private resourcePath(): string {
    return `${this.baseUrl}${this.resourceEndpoint}`;
  }
}
