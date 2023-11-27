import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // blogs = [];
  blog: any;
  constructor() {
    this.blog = {
      Id: 1,
      Title: 'Random Blog Post 1',
      // Author: {
      //   Name: 'Jhon Doe',
      // },
      Author: null,
    };
  }
}
