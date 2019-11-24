import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TaskDetail} from '../model/TaskDetailVO';



@Injectable({
  providedIn: 'root'
})
export class TskMgmServiceService {

  constructor(private httpClient:HttpClient) { }

  insertTaskDetail(taskDetail:TaskDetail):Observable<any>{   
    return this.httpClient.post('http://localhost:8080/task/addTask',taskDetail);
  }


}
