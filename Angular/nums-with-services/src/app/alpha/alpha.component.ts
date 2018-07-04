import { Component, OnInit } from '@angular/core';
import { NumService } from '../num.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: Array<number>;

  constructor(private _numService: NumService) { }

  ngOnInit() {
  }

  genAlpha() {
    this.numbers = this._numService.randAlpha();
  }

}
