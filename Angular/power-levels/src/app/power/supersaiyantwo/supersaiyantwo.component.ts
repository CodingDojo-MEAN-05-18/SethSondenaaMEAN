import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnInit, OnChanges {

  @Input() currPower: number;
  superSaiyanTwoPower: number;

  constructor() { }

  ngOnInit() {
    this.superSaiyanTwoPower = null;
  }

  ngOnChanges() {
    this.superSaiyanTwoPower = this.currPower * 150;
  }

}
