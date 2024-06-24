import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TasksService} from "../../../tasking/services/tasks.service";

@Component({
  selector: 'app-view-progress-task',
  templateUrl: './view-progress-task.component.html',
  styleUrls: ['./view-progress-task.component.css']
})
export class ViewProgressTaskComponent implements OnInit{
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
