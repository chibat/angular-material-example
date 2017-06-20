import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
