import { Component } from '@angular/core';
import { testData } from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-virtual-scroll';

  // numbers: number[] = [];
  numbers = testData;

  constructor() {
    console.log(this.numbers.length)
    // for (let index = 0; index < 10000; index++) {
    //   this.numbers.push(index);
    // }
  }
}
