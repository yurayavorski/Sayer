import { Injectable } from '@angular/core';
import {Comment} from './comment'
import {Task} from "./task";

@Injectable()
export class TasksService {
  tasks: Task[] = [];
  constructor() { 
    // this.tasks = [
    //     new Task("First item with long customizeble title"),
    //     new Task("second Item")
    // ]
    // this.tasks[0].comments = [
    //     new Comment("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    //     new Comment("Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
    // ]
      let tasks: Task[] = JSON.parse(localStorage.getItem("tasks"));
      if (tasks != null)
          this.tasks = tasks;
  }
    addTask (text: string): void {
        this.tasks.push(new Task(text));
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    addComment (id:number, text: string): void {
        this.tasks[id].comments.push(new Comment(text));
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    deleteTask (task: Task): void {
        let index: number = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

}
