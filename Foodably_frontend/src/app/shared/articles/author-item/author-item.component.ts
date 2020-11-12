import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {

  @Input()
  author: string;

  constructor() { }

  ngOnInit() {
  }

}
