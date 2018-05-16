import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any = [];

  constructor(private _tasksService: TasksService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchAllTasks()
  }

  fetchAllTasks() {
    this._tasksService
      .getTasks()
      .subscribe(
        data => { console.log(data); this.tasks = data },
        err => console.error(err),
        () => console.log('done loading foods')
      );
  }

  deleteTask(id) {
    this._tasksService.deleteTask({ id })
      .subscribe(
        data => {
          this.openSnackBar('Tarefa deletada.', 'Fechar')
          this.fetchAllTasks()
        },
        err => console.error(err),
        () => console.log('done loading foods')
      );
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
