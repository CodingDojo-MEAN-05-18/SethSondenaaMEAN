import { Component, OnInit } from '@angular/core';
import { NumService } from '../num.service';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {
  sum: number;

  constructor(private _numService: NumService) { }

  ngOnInit() {
  }

  genSum() {
    this.sum = this._numService.calcSum();
  }

}
