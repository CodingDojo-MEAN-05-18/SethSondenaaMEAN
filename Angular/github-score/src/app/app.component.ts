import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  buttonStat = 'unclicked';
  user = new User();
  score: any;

  constructor(private _githubService: GithubService) { }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.buttonStat = form.value.username;
    this.score = this._githubService.getScore(form.value.username);
  }

}
