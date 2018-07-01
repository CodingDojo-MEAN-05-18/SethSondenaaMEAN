import { Component } from '@angular/core';

import { Email } from './email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  email = new Email();

  emails: Array<Email> = [
    {
      address: 'seth@sondenaa.com',
      importance: false,
      subject: 'second stack',
      content: 'Learning my second stack, MEAN!',
    },
    {
      address: 'enzo@dog.com',
      importance: true,
      subject: 'walk',
      content: 'been a while since we went on a walk...',
    },
    {
      address: 'edwin@diaz.com',
      importance: true,
      subject: 'record breaking season',
      content: 'on my way to a legendary year!',
    },
  ];
}
