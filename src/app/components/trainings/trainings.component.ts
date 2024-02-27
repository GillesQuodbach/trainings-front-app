import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  listTrainings: Training[] | undefined;
  constructor() {}

  ngOnInit(): void {}

  displayTraining() {
    this.listTrainings = [
      {
        id: 1,
        name: 'Java',
        description: 'Formation Java SE 8 sur 5 jours',
        price: 1500,
      },
      {
        id: 2,
        name: 'DotNet',
        description: 'Formation DotNet 3 jours',
        price: 1000,
      },
      {
        id: 1,
        name: 'Python',
        description: 'Formation Python/Django sur 5 jours',
        price: 1500,
      },
    ];
  }
}
