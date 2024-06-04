import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Technical} from "../model/technical";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TechnicalService extends BaseService<Technical>{

  endPoint = '/technical';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }
}
