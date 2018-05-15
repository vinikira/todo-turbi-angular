import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  name: string = '';
  details: string = '';
  scheduled: Date = new Date();

  constructor(private router: Router) { }
  ngOnInit() {
  }

}
