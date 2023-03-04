import { Component } from '@angular/core';

// app-root ada di index.html, dimana ia akan me-load 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is my first app';
}
