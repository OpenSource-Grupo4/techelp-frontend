import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class BaseService<T> {

    baseUrl: string ='https://my-json-server.typicode.com/FORASTERRO/TechHelpTaskDB';
    resourceEndpoint: string ='/resources';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
        })
    }
    constructor(private http: HttpClient) { }
    private resourcePath(): string {
        return `${this.baseUrl}${this.resourceEndpoint}`;
    }
    handleError(error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            console.log(`An error occurred ${error.error.message}`);
        }else {
            console.log(`Backend return code ${error.status}`);
        }
        return throwError(()=>
                new Error('Something happened with request, please try again later'))
    }
    createResource(item: any): Observable<T> {
        return this.http.post<T>(this.resourcePath(), JSON.stringify(item),this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    deleteResource(id: any) {
        return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions)
            .pipe(retry(2),catchError(this.handleError));
    }

    updateResource(id:any,item:any):Observable<T>{
        return this.http.put<T>(`${this.resourcePath()}/${id}`,JSON.stringify(item), this.httpOptions)
            .pipe(retry(2),catchError(this.handleError));
    }

    getAll():Observable<T>{
        return this.http.get<T>(this.resourcePath(),this.httpOptions)
            .pipe(retry(2),catchError(this.handleError));
    }

    getById(id:any):Observable<T> {
        return this.http.get<T>(`${this.resourcePath()}/${id}`,  this.httpOptions);
    }


}
