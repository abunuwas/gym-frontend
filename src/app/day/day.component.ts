import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  allowAddRoutine = false;
  message = '';
  routineName = '';

  constructor() {
    setTimeout(() => {
      this.allowAddRoutine = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onAddRoutine() {
    this.message = 'A routine was added! ' + this.routineName;
  }

  onUpdateRoutine(event: any) {
    this.routineName = event.target.value;
  }

}
