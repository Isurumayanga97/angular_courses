import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTaskReminder: EventEmitter<Task> = new EventEmitter();
  faTime = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(par: any) {
    this.onDeleteTask.emit(par)
  }


  onToggle(task: any) {
    this.onToggleTaskReminder.emit(task);
  }


}
