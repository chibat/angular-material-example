import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  inSearch = false;
  cardSelectedFlag = false;

  search() {
    this.inSearch = true;
    setTimeout(() => {
      this.inSearch = false;
    }, 3000);
  }

  onClickCard() {
    this.cardSelectedFlag = !this.cardSelectedFlag;
  }
}
