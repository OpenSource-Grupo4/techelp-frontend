import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Task} from "../../model/task";
import {NgForm} from "@angular/forms";
import transformJavaScript from "@angular-devkit/build-angular/src/tools/esbuild/javascript-transformer-worker";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  @Input() task:Task;

  @ViewChild('taskForm',{static:false}) taskForm!:NgForm;

  @Input() editMode=false;

  @Output() taskAdded=new EventEmitter<Task>();

  @Output() taskUpdated =new EventEmitter<Task>();

  @Output() editCanceled=new EventEmitter();

  constructor() {
    this.task={} as Task;

  }

  private resetEditState(){
    this.editMode=false;
    this.taskForm.resetForm();
    this.task={} as Task;
  }

  onSubmit(){
    if(this.taskForm.form.valid){
      if(this.editMode){
        this.taskUpdated.emit(this.task);
      }else {
        this.taskAdded.emit(this.task);
      }
      this.resetEditState()
    }else {
      console.log('Invalid data')
    }
  }

  onCancel(){
    this.resetEditState();
    this.editCanceled.emit();
  }
}
