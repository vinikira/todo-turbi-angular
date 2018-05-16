import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },

  { path: 'task/new', component: NewTaskComponent },

  { path: '', component: TasksComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
