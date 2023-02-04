import {Component, Input, OnInit} from '@angular/core';
import {TASKS} from "../../mock-task";
import {Task} from "../../Task";
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((res) =>
      this.tasks = res
    );
  }

  deleteTask(value: Task) {
    this.taskService
      .deleteTask(value)
      .subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== value.id)));
  }


  toggleReminder(value: Task) {
    value.reminder ? value.reminder = false : value.reminder = true;
    this.taskService.updateTaskReminder(value).subscribe();
  }


  taskAdd($req: any) {
    this.taskService.addTask($req).subscribe(($req) => (this.tasks.push($req)))
  }


}
