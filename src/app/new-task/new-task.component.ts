import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TasksService } from '../tasks.service'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  name: string = '';
  detail: string = '';
  scheduled: Date = new Date();
  loading: boolean = false;

  constructor(private _taskService: TasksService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  resetForm() {
    console.log(this.scheduled)
    this.name = ''
    this.detail = ''
    this.scheduled = new Date()
  }
  submitTask() {
    // console.log({
    //   name: this.name,
    //   detail: this.detail,
    //   scheduled: this.scheduled
    // })
    this._taskService.createTask({
      name: this.name,
      detail: this.detail,
      scheduled: this.scheduled
    })
      .subscribe(
        data => this.openSnackBar('Tarefa salva com sucesso!', 'Fechar'),
        err => { console.error(err) },
        () => this.loading = false
      );
  }

  onDate(e) {
    const date = e.target.value.split('/').reverse().join('-')

    this.scheduled = new Date(date)
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
