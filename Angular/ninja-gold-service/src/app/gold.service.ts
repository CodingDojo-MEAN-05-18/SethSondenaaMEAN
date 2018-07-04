import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoldService {
  gold = 0;
  moves: Array<string> = [];
  moveResult: number;


  constructor() { }

  checkTotal(): number {
    return this.gold;
  }

  checkLog(): Array<string> {
    return this.moves;
  }

  resetTotal() {
    this.gold = 0;
    this.moves = [];
  }

  madeMove(move: string) {
    if (move === 'farm') {
      this.moveResult = Math.floor(Math.random() * 4) + 2;
    } else if (move === 'cave') {
      this.moveResult = Math.floor(Math.random() * 6) + 5;
    } else if (move === 'casino') {
      this.moveResult = Math.floor(Math.random() * 201) - 100;
    } else if (move === 'house') {
      this.moveResult = Math.floor(Math.random() * 9) + 7;
    }

    if (this.moveResult > 0) {
      this.moves.push('Youve gained ' + this.moveResult + ' gold at the ' + move + '.');
    } else if (this.moveResult < 0) {
      this.moves.push('Youve lost ' + this.moveResult + ' gold at the ' + move + '.');
    } else if (this.moveResult === 0) {
      this.moves.push('Youve came out even at the ' + move + '.');
    }

    this.gold = this.gold + this.moveResult;
  }
}
