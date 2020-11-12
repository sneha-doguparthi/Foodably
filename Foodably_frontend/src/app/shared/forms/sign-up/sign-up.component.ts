import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../profile-management.component.scss']
})
export class SignUpComponent implements OnInit {

  @ViewChild('signUpForm') signUpForm: NgForm;

  @Output()
  close = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
