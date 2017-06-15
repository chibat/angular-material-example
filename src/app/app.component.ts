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

  visibleMoveButton = false;

  constructor() {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset < 100) {
          this.visibleMoveButton = false;
      } else {
          this.visibleMoveButton = true;
      }
      if (this.getScrollBottom() === 0) {
        alert('bottom');
      }
    });
  }

  private getScrollBottom() {
    var body = window.document.body;
    var html = window.document.documentElement;
    var scrollTop = body.scrollTop || html.scrollTop;
    return html.scrollHeight - html.clientHeight - scrollTop;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

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
