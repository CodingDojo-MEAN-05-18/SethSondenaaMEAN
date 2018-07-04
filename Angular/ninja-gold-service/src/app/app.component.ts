import { Component, OnInit, DoCheck } from '@angular/core';
import { GoldService } from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app';
  gold: number;

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.gold = this._goldService.checkTotal();
  }

  reset() {
   this._goldService.resetTotal();
  }

}
