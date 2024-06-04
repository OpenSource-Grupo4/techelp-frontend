import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit{
  task:any=[];
  uo: string = "";
  constructor(private route: ActivatedRoute,private tasksService:TasksService) {
    this.route.params.subscribe(params => {
      this.uo = params['id'];
    })
  }

  private getTask(){
    let urlId = '?id=' + this.uo;
    this.tasksService.getById(urlId).subscribe((response:any) => {
      this.task = response;
    })
  }

  ngOnInit(): void {
    this.getTask();
  }
}
