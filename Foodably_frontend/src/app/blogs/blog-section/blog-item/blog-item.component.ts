import {Component, Input, OnInit} from '@angular/core';
import { BlogItem } from '../../../shared/models/blog-item.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input()
  blogItem: BlogItem;

  constructor() { }

  ngOnInit() {
  }

}
