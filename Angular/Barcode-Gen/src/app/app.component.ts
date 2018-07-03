import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  squares: Array<string> = [];

  setColors(): Array<string> {
    for (let i = 0; i < 10; i++) {
      const randomNumber = (Math.floor(Math.random() * 5)) + 1;
      if (randomNumber === 1) {
        this.squares.push('green');
      } else if (randomNumber === 2) {
        this.squares.push('lightblue');
      } else if (randomNumber === 3) {
        this.squares.push('yellow');
      } else if (randomNumber === 4) {
        this.squares.push('red');
      } else {
        this.squares.push('darkgrey');
      }
    }
    return;
  }

  ngOnInit() {
    this.setColors();
  }
}
