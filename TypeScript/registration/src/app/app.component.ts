import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  states: Array<string> = [
    'Alabama',
   'Alaska',
   'Arizona',
   'Arkansas',
   'California',
   'Colorado',
   'Connecticut',
   'Delaware',
   'Florida',
   'Georgia',
   'Hawaii',
   'Idaho',
   'Illinois',
   'Indiana',
   'Iowa',
   'Kansas',
   'Kentucky',
   'Louisiana',
   'Maine',
   'Maryland',
   'Massachusetts',
   'Michigan',
   'Minnesota',
   'Mississippi',
   'Missouri',
   'Montana',
   'Nebraska',
   'Nevada',
   'New Hampshire',
   'New Jersey',
   'New Mexico',
   'New York',
   'North Carolina',
   'North Dakota',
   'Ohio',
   'Oklahoma',
   'Oregon',
   'Pennsylvania',
   'Rhode Island',
   'South Carolina',
   'South Dakota',
   'Tennessee',
   'Texas',
   'Utah',
   'Vermont',
   'Virginia',
   'Washington',
   'West Virginia',
   'Wisconsin',
   'Wyoming',
   'District of Columbia',
   ];
  user = new User();
  users: Array<User> = [];
  success = 'pending';

  onRegister(event: Event, form: NgForm) {
    event.preventDefault();
    this.users.push(this.user);
    this.user = new User();
    this.success = 'success';
    form.reset();
  }
}
