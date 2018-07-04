import { Component, OnInit } from '@angular/core';

import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  score: any;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
  }

}
