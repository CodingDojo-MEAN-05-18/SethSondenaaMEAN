import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  powerOptions: Array<number> = [];
  power: number;
  currPower: number;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.powerOptions.push(i);
    }
  }

  setPower(event: Event, form: NgForm) {
    event.preventDefault();
    this.currPower = this.power;
    form.reset();
  }

}
