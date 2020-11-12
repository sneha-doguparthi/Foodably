import {Component, Input, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input()
  author: string;

  @Input()
  date: Date;

  constructor(private datepipe: DatePipe) { }

  ngOnInit() {
  }

  getDate() {
    return this.datepipe.transform(this.date, 'dd MMM, yyyy');
  }
}
