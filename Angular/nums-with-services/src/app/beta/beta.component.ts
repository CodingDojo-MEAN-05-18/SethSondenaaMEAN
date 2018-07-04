import { Component, OnInit } from '@angular/core';
import { NumService } from '../num.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: Array<number>;

  constructor(private _numService: NumService) { }

  ngOnInit() {
  }

  genBeta() {
    this.numbers = this._numService.randBeta();
  }

}
