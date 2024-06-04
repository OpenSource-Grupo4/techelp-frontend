import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Task} from "../../model/task";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit,AfterViewInit{

    taskData:Task;
    dataSource:MatTableDataSource<any>;
    displayColumns: string[]=['id','name', 'Cellphone', 'Date', 'Actions']
    @ViewChild(MatPaginator,{static:false}) paginator!:MatPaginator;
    @ViewChild(MatSort,{static:false}) sort!:MatSort;
    isEditMode:boolean;
  constructor(private tasksService:TasksService) {
      this.taskData= {} as Task;
      this.dataSource=new MatTableDataSource<any>();
      this.isEditMode=false;
  }

  private resetEditState(){
      this.isEditMode=false;
      this.taskData={} as Task;

  }

  private getAllTask(){
      this.tasksService.getAll().subscribe((response:any)=>{
          this.dataSource=response;
      })
  }

  private addTask(){
      this.taskData.id=0;
      this.tasksService.createResource(this.taskData).subscribe((response:any)=>{
          this.dataSource.data.push({...response});
          this.dataSource.data=this.dataSource.data.map((t:Task)=>{return t;})
      })
  }


    private updateTask() {
        let student = this.taskData;
        this.tasksService.updateResource(student.id, student).subscribe((response: any) => {
            this.dataSource.data = this.dataSource.data.map((t: Task) => {
                if (t.id === response.id) {
                    t = response;
                }
                return t;
            });
        });
    }



  private deleteStudent(id:number){
      this.tasksService.deleteResource(id).subscribe(()=>{
          this.dataSource.data=this.dataSource.data.filter((t:Task)=>{
              return t.id !== id ? t :false
          });
      });
  }

  onEditItem(element:Task){
      this.taskData=element;
      this.isEditMode=true;
  }

  onCancelEdit(){
      this.isEditMode=false;
      this.getAllTask();
  }

  onDeleteItem(element:Task){
      this.deleteStudent(element.id);
  }
  onTaskAdded(task:Task){
      this.taskData=task;
      this.addTask();
      this.resetEditState();
  }

  onTaskUpdate(task:Task){
      this.taskData=task;
      this.updateTask();
      this.resetEditState();
  }




    ngAfterViewInit(): void {
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    }

    ngOnInit(): void {
      this.getAllTask();
    }


}
