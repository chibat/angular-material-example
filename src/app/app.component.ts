import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inSearch = false;

  search() {
    this.inSearch = true;
    setTimeout(()=>{
      this.inSearch = false;
    }, 3000);
  }
}
