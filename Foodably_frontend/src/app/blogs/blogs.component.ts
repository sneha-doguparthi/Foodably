import { Component, OnInit } from '@angular/core';
import {BlogItem} from '../shared/models/blog-item.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  topBlogs: BlogItem[] = [
    new BlogItem('assets/img/stock-img/bruna-branco-7r1HxvVC7AY-unsplash.jpg',
      'Slow Cooker Beef Stew asdfsadf',
      'Trevor Parker',
      'Just in case you haven’t noticed already, we’ve launched a new feature that enables all of our community members to upload their own recipes through Kitchen Stories’ app! Ever since the …',
      314),
    new BlogItem('assets/img/stock-img/emiliano-vittoriosi-OFismyezPnY-unsplash.jpg',
      'Slow Cooker Beef Stew asdfsadf',
      'Trevor Parker',
      'Just in case you haven’t noticed already, we’ve launched a new feature that enables all of our community members to upload their own recipes through Kitchen Stories’ app! Ever since the …',
      314),
    new BlogItem('assets/img/stock-img/davide-cantelli-jpkfc5_d-DI-unsplash.jpg',
      'Slow Cooker Beef Stew asdfsadf',
      'Trevor Parker',
      'Just in case you haven’t noticed already, we’ve launched a new feature that enables all of our community members to upload their own recipes through Kitchen Stories’ app! Ever since the …',
      314),
  ];

  constructor() { }

  ngOnInit() {
  }

}
