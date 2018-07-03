import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnInit, OnChanges {

  @Input() currPower: number;
  superSaiyanPower: number;

  constructor() { }

  ngOnInit() {
    this.superSaiyanPower = null;
  }

  ngOnChanges() {
    this.superSaiyanPower = this.currPower * 90;
  }

}
