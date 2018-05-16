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
  showCompleted: boolean = false;
  breakpoint: Number = 3;

  constructor(private _tasksService: TasksService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchAllTasks()
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 3;
  }

  filterTasks() {
    return Object.keys(this.tasks).filter((key) => {
      return this.showCompleted || !this.tasks[key].done
    }).reverse()
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 3;
  }

  fetchAllTasks() {
    this._tasksService
      .getTasks()
      .subscribe(
        data => { this.tasks = data },
        err => console.error(err)
      );
  }

  deleteTask(id) {
    this._tasksService.deleteTask({ id })
      .subscribe(
        data => {
          this.openSnackBar('Tarefa deletada.', 'Fechar')
          this.fetchAllTasks()
        },
        err => console.error(err)
      );
  }

  changeConfirmation(id) {
    const task = this.tasks[id]
    const method = task.done ? 'setNotDone' : 'setDone';

    this._tasksService[method]({ id })
      .subscribe(
        data => {
          this.openSnackBar('Tarefa alterada.', 'Fechar')
          this.fetchAllTasks()
        },
        err => console.error(err)
      );
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
