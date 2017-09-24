import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  allowAddRoutine = false;

  constructor() {
    setTimeout(() => {
      this.allowAddRoutine = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
