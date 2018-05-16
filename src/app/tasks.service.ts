import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url: string = environment.taskApi
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(`${this.url}/v1/tasks`)
  }

  createTask(task) {
    const body = JSON.stringify(task);

    return this.http.post(`${this.url}/v1/tasks`, body, httpOptions);
  }

  updateTask(task) {
    let body = JSON.stringify(task);
    return this.http.put(`${this.url}/v1/tasks/` + task.id, body, httpOptions);
  }

  deleteTask(task) {
    return this.http.delete(`${this.url}/v1/tasks/` + task.id);
  }
}
