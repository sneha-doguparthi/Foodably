import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../profile-management.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;

  @Output()
  close = new EventEmitter<void>();
  @Output()
  login = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    console.log(this.loginForm);
    this.login.emit();
  }
}
