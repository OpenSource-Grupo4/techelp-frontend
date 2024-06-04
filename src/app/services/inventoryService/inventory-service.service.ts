import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService<T> {
  baseUrl: string = 'https://my-json-server.typicode.com/GioRC0/TechHelpDB';
  resourceEndpoint: string = '/inventories';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  getInventory(id:string): Observable<T>{
    return this.http.get<T>(`${this.baseUrl}/inventories/${id}`,this.httpOptions);
  }

  updateInventory(id:any, item:any):Observable<T>{
    return this.http.put<T>(`${this.baseUrl}/inventories/${id}`, JSON.stringify(item), this.httpOptions);
  }
}
