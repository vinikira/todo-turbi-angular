import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'task/new', component: TaskFormComponent },
  { path: 'task/:id', component: TaskFormComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
