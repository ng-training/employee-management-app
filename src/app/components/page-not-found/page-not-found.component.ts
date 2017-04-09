import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <h1>
    404 Page not found!
  </h1>
  <h2>
    {{ customMessage }}
  </h2>
`
})
export class PageNotFoundComponent implements OnInit {

  @Input() customMessage: string;

  constructor() { }

  setDefaultMessage() {
    this.customMessage = 'foo';
  }

  ngOnInit() {
  }

}
