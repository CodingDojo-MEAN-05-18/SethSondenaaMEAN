import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  switches: Array<string> = ['off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off'];

  flipSwitch(flipped: number, status: string) {
    if (status === 'off') {
      this.switches[flipped] = 'on';
    } else {
      this.switches[flipped] = 'off';
    }
  }
}
