import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { TasksService } from '../tasks.service'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  name: string = '';
  detail: string = '';
  scheduled: Date = new Date();
  loading: boolean = false;
  id: string = '';

  constructor(
    private _taskService: TasksService,
    private _snackBar: MatSnackBar,
    private _activateRoute: ActivatedRoute,
    private _route: Router) { }

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
      if (params['id']) {
        this.fetchTask(params['id'])
      }
    });
  }

  fetchTask(id) {
    this._taskService.getOneTask({
      id
    })
      .subscribe(
        data => {
          this.name = data['name'];
          this.detail = data['detail'];
          this.scheduled = new Date(data['scheduled']);
          this.id = id;
        },
        err => { console.error(err) },
        () => this.loading = false
      );
  }

  resetForm() {
    this.name = ''
    this.detail = ''
    this.scheduled = new Date()
  }

  submitTask() {
    const method = this.id ? 'updateTask' : 'createTask';

    this._taskService[method]({
      id: this.id,
      name: this.name,
      detail: this.detail,
      scheduled: this.scheduled
    })
      .subscribe(
        data => {
          const snacRef = this.openSnackBar('Tarefa salva com sucesso!', 'Fechar')

          snacRef.afterDismissed().subscribe(() => {
            this._route.navigateByUrl('/tasks');
          });
        },
        err => { console.error(err) },
        () => this.loading = false
      );
  }

  onDate(e) {
    const date = e.target.value.split('/').reverse().join('-')

    this.scheduled = new Date(date)
  }

  openSnackBar(message, action) {
    return this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
