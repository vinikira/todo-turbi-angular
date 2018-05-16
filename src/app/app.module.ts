import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import localePTBR from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatNativeDateModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatTooltipModule,
  MatGridListModule,
  MatSnackBarModule,
  MatDividerModule,
  MatButtonToggleModule,
  MAT_DATE_LOCALE
} from '@angular/material';

import { routing } from './app.routing';
import { TasksComponent } from './tasks/tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksService } from './tasks.service';

registerLocaleData(localePTBR, 'pt-BR')

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDividerModule,
    MatButtonToggleModule,
    routing
  ],
  exports: [
  ],
  providers: [
    TasksService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
