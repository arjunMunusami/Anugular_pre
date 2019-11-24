import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {TskMgmServiceService} from '../service/tsk-mgm-service.service'
import {TaskDetail} from '../model/TaskDetailVO';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private tskMgmtService:TskMgmServiceService) { }

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
    let taskDetail = new TaskDetail();
   
    taskDetail.taskName = this.taskForm.get("taskName").value;
    taskDetail.taskPriority = this.taskForm.get("taskPriority").value;
    taskDetail.taskStartDt = this.taskForm.get("taskStartDt").value;
    taskDetail.taskEndDt = this.taskForm.get("taskEndDt").value;
    if(this.taskForm.get("taskParent").value!='') {
      let parentTaskDetail = new TaskDetail();
      parentTaskDetail.taskName = this.taskForm.get("taskParent").value;
      taskDetail.parentTask = parentTaskDetail;
    }

    this.tskMgmtService.insertTaskDetail(taskDetail).subscribe(
      (taskDetail)=>{console.log(taskDetail);},
      (error)=>console.log(error)
      );

  }

  resetTaskForm() {
    this.taskForm.reset();
  }

}
