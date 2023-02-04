import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  statusData = [
    {
      user: 'Isuru1',
      date: '2023',
      description: 'hjks dsjdhjs',
      color: 'red',
      borderClass: 'border-primary'
    },
    {
      user: 'umay',
      date: '2022',
      description: 'rtrtr',
      color: 'blue',
      borderClass: 'border-primary'
    }
  ]

}
