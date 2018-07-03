import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from './quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = new Quote();
  quotes: Array<Quote> = [];

  constructor() { }

  ngOnInit() {
  }

  postQuote(event: Event, form: NgForm) {
    event.preventDefault();
    this.quotes.push(this.quote);
    this.quote = new Quote();
    form.reset();
  }

}
