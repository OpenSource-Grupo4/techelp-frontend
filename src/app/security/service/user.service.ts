import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{
  endPoint = '/users';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }
}
