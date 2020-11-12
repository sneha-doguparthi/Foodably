import {Component, Input, OnInit} from '@angular/core';
import {BlogItem} from '../../../shared/models/blog-item.model';

@Component({
  selector: 'app-blog-item-featured',
  templateUrl: './blog-item-featured.component.html',
  styleUrls: ['./blog-item-featured.component.scss']
})
export class BlogItemFeaturedComponent implements OnInit {

  @Input()
  blogItem: BlogItem;

  constructor() { }

  ngOnInit() {
  }
}
