import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-api-docs',
  template: `
  <h2>API Docs</h2>
  <pre *ngIf="response">
    {{response}}
  </pre>
  `
})
export class ApiDocsComponent implements OnInit {

  response = '';

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/v2/api-docs').subscribe(res => {
      this.response = JSON.stringify(res.json(), undefined, 2);
    }, error => {
      this.response = error;
    });
  }
}
