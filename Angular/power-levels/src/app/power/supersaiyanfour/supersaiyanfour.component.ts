import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnInit, OnChanges {

  @Input() currPower: number;
  superSaiyanFourPower: number;

  constructor() { }

  ngOnInit() {
    this.superSaiyanFourPower = null;
  }

  ngOnChanges() {
    this.superSaiyanFourPower = this.currPower * 500;
  }

}
