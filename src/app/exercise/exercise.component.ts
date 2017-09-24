import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  repetitions = 0;
  weight = 0;
  sets = 'hoho';
  canAddExerciseData = false;

  constructor() { }

  ngOnInit() {
  }

  getColorSets() {
    return this.sets === '' ? 'red' : 'green';
  }

  onAddExerciseData() {
    this.sets = 'hahahaha';
  }

}
