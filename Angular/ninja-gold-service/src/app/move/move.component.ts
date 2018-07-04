import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

  makeMove(move: string) {
    this._goldService.madeMove(move);
  }

}
