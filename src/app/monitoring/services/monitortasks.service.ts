import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/service/base.service";
import {Taskprogress} from "../model/taskprogress";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MonitortasksService extends BaseService<Taskprogress>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint='/progress';
  }
}
