import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

class Condition {
  id = new FormControl();
  email = new FormControl();
  phone = new FormControl();
  postalCode = new FormControl();
  birthday =  new FormControl();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        /* backgroundColor: '#eee', */
        transform: 'scale(1)',
        zIndex: '9'
      })),
      state('active',   style({
        /*backgroundColor: '#cfd8dc',*/
        /* transform: 'scale(1, 1.1)', */
        zIndex: '10',
        position: 'absolute', top: '100px'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {

  scroll(event) {

    const element = document.getElementById('hoge');

    var rect = element.getBoundingClientRect() ;
    var positionX = rect.left + window.pageXOffset;
    var positionY = rect.top + window.pageYOffset;

    window.scrollTo( positionX, positionY - 70) ;

  }

  state = 'inactive';
  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }

  title = 'app';
  inSearch = false;
  cardSelectedFlag = false;

  visibleMoveButton = false;

  condition = new Condition();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset < 100) {
          this.visibleMoveButton = false;
      } else {
          this.visibleMoveButton = true;
      }
      if (this.getScrollBottom() === 0) {
        // alert('bottom');
      }
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
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
    alert(toString.call(this.condition.birthday.value));
    this.inSearch = true;
    setTimeout(() => {
      this.inSearch = false;
    }, 3000);
  }

  onClickCard() {
    this.cardSelectedFlag = !this.cardSelectedFlag;
  }

  buildForm(): void {
    this.form = this.fb.group({
      'id': this.condition.id,
      'email': this.condition.email
    });

    this.form.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  multiKeyError = false;

  onValueChanged(data?: any) {
    this.multiKeyError = false;
    if (this.condition.id.value && this.condition.email.value) {
      this.multiKeyError = true;
    }
  }
}
