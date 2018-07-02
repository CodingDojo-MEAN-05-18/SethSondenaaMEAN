import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  time: Date = null;
  timezonePicked = '';

  onZoneClick(zone: string) {
    this.time = new Date();
    this.timezonePicked = 'pst';
    if (zone === 'mst') {
      this.time.setHours(this.time.getHours() + 1);
      this.timezonePicked = 'mst';
    } else if (zone === 'cst') {
      this.time.setHours(this.time.getHours() + 2);
      this.timezonePicked = 'cst';
    } else if (zone === 'est') {
      this.time.setHours(this.time.getHours() + 3);
      this.timezonePicked = 'est';
    }
  }

  onClearClick() {
    this.timezonePicked = '';
    this.time = null;
  }
}
