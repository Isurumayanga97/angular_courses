import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../service/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddNewTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showTaskAdd: boolean = true;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showTaskAdd = value))
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add task!')
    }

    const addNewTask = {
      'text': this.text,
      'day': this.day,
      'reminder': this.reminder
    }

    this.onAddNewTask.emit(addNewTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }


}
