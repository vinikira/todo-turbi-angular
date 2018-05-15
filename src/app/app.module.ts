import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {
  MatDatepickerModule,
  MatFormFieldModule
} from '@angular/material';

import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },

  { path: 'task-new', component: NewTaskComponent },

  { path: '', component: TasksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatFormFieldModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
