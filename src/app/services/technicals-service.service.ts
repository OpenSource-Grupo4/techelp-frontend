import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TechnicalsServiceService {
  baseUrl: string = 'https://my-json-server.typicode.com/FORASTERRO/TechHelpDB';
  resourceEndpoint: string = '/technicals';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.resourcePath(), this.httpOptions);
  }

  getById(id:string) {
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions);
  }

  getIncomes(id:string){
    return this.http.get<any[]>(`${this.baseUrl}/incomes/${id}`,this.httpOptions);
  }

  private resourcePath(): string {
    return `${this.baseUrl}${this.resourceEndpoint}`;
  }
}
