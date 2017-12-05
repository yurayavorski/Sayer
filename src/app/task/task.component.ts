import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Task} from "../shared/task";
import {TasksService} from "../shared/tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: Task;
  taskId: number;
  constructor(private service: TasksService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.taskId = params['taskID'];
      this.task = this.service.tasks[this.taskId];
    });
  }
  add (event: Event, input: HTMLInputElement) {
    event.preventDefault();
    this.service.addComment(this.taskId, input.value);
    input.value = "";
  }

}
