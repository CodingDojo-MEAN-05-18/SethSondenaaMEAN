import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumService {
  numbersA: Array<number>;
  numbersB: Array<number>;

  constructor() {   }

  randAlpha(): Array<number> {
    this.numbersA = [];
    const listSize = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < listSize; i++) {
      this.numbersA.push(Math.floor(Math.random() * 10) + 1);
    }
    return this.numbersA;
  }

  randBeta(): Array<number> {
    this.numbersB = [];
    const listSize = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < listSize; i++) {
      this.numbersB.push(Math.floor(Math.random() * 10) + 1);
    }
    return this.numbersB;
  }

  calcSum(): number {
    let sum = 0;
    for (const num of this.numbersA) {
      sum = sum + num;
    }
    for (const num of this.numbersB) {
      sum = sum + num;
    }
    return sum;
  }

}
