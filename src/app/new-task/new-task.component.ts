import { Component, OnInit } from '@angular/core';
import {TasksService} from "../shared/tasks.service";
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  title: string = "Create new item";
  constructor(private service: TasksService) { }

  ngOnInit() {
  }
  add (event: Event, input: HTMLInputElement) {
    event.preventDefault();
    this.service.addTask(input.value);
    alert('task: "' + input.value + '" was created');
    input.value = "";
  }
  

}
