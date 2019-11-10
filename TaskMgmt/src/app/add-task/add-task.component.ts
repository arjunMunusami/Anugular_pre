import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  taskForm = new FormGroup({
    taskId: new FormControl(''),
    taskName: new FormControl('',[
      Validators.required
    ]),
    taskPriority: new FormControl(''),
    taskStartDt: new FormControl('',[
      Validators.required,
      Validators.pattern('^((0|1)\d{1})-((0|1|2)\d{1})-((19|20)\d{2})')
    ]),
    taskEndDt: new FormControl('',[
      Validators.required,
      Validators.pattern('^((0|1)\d{1})-((0|1|2)\d{1})-((19|20)\d{2})')
    ]),
    taskParent: new FormControl('')
  })

  ngOnInit() {
  }

  addTaskDetail() {
    console.log(this.taskForm.value);
  }

  resetTaskForm() {
    this.taskForm.reset();
  }

}
