import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Task} from "../shared/task";
import {TasksService} from "../shared/tasks.service";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string = "Sayer";
  subTitle: string = "World's most used time waster";
  tasks: Task[];
  constructor(private service: TasksService, private router: Router) {
    this.tasks = this.service.tasks;
  }

  ngOnInit() {

  }

  openTask(task: Task): void {
    this.router.navigate(['/task'], {queryParams: {taskID: this.tasks.indexOf(task)}});
  }
  delete(task: Task): void {
    this.service.deleteTask(task);
  }

}
