import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  url = '/assets/confused.jpg';

  testClick($event) {
    console.log('clicked');
    this.url = '';
  }
}
