import { Component, OnInit, DoCheck } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit, DoCheck {
  moves: Array<string>;

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.moves = this._goldService.checkLog();
  }

}
