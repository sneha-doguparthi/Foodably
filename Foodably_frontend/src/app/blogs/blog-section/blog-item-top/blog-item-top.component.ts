import {Component, Input, OnInit} from '@angular/core';
import {BlogItem} from '../../../shared/models/blog-item.model';

@Component({
  selector: 'app-blog-item-top',
  templateUrl: './blog-item-top.component.html',
  styleUrls: ['./blog-item-top.component.scss']
})
export class BlogItemTopComponent implements OnInit {

  @Input('topBlogItem')
  blogItem: BlogItem;

  constructor() { }

  ngOnInit() {
  }

}
