import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit, OnChanges {

  @Input() currPower: number;
  saiyanPower: number;

  constructor() { }

  ngOnInit() {
    this.saiyanPower = null;
  }

  ngOnChanges() {
    this.saiyanPower = this.currPower * 10;
  }

}
