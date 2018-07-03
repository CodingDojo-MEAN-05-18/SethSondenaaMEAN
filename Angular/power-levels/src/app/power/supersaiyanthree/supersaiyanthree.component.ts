import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit, OnChanges {

  @Input() currPower: number;
  superSaiyanThreePower: number;

  constructor() { }

  ngOnInit() {
    this.superSaiyanThreePower = null;
  }

  ngOnChanges() {
    this.superSaiyanThreePower = this.currPower * 250;
  }

}
