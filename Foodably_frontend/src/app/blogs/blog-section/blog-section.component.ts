import {Component, Input, OnInit} from '@angular/core';
import {BlogItem} from '../../shared/models/blog-item.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {

  @Input()
  blogSection = {
    header: 'Posts that might interest you',
    blogArticles: [
      new BlogItem('assets/img/stock-img/rachel-park-hrlvr2ZlUNk-unsplash.jpg', 'The Perfect Holiday Cookie, Based on Your Zodiac Sign', 'Trevor Parker', 'Just in case you haven’t noticed already, we’ve launched a new feature that enables all of our community members to upload their own recipes through Kitchen Stories’ app! Ever since the launch, we’ve been marveling at the creativity and diversity …', 1),
      new BlogItem('', 'Everything You Need to Know About Preparing and Storing In Season Oranges', 'Martha Dixon', 'I guess you could say my childhood was strewn together with beautifully slivered oranges. Whether it was a birthday, wedding, Chinese New Year, or simply a fresh dessert on a weeknight, there was never an inappropriate time for my grandma to present a bouquet of orange slices. Its favored place in Chinese ...', 1),
      new BlogItem('', 'Everything You Need to Know About Preparing and Storing In Season Oranges', 'Edna Schwartz', 'I guess you could say my childhood was strewn together with beautifully slivered oranges. Whether it was a birthday, wedding, Chinese New Year, or simply a fresh dessert on a weeknight, there was never an inappropriate time for my grandma to present a bouquet of orange slices. Its favored place in Chinese ...', 1),
      new BlogItem('', 'The Perfect Holiday Cookie, Based on Your Zodiac Sign', 'Trevor Parker', 'Just in case you haven’t noticed already, we’ve launched a new feature that enables all of our community members to upload their own recipes through Kitchen Stories’ app! Ever since the launch, we’ve been marveling at the creativity and diversity of these brilliant recipes, from sesame chicken, lentil … ', 1),
      new BlogItem('', 'Beat the Blues with This Winter Salad with Summery Hues', 'Jeffery Neal', 'Just in case you haven’t noticed already, we’ve launched a new feature that enables all of our community members to upload their own recipes through Kitchen Stories’ app! Ever since the launch, we’ve been marveling at the creativity and diversity of these brilliant recipes, from sesame chicken, lentil … ', 1),
      new BlogItem('', 'Everything You Need to Know About Preparing and Storing In Season Oranges', 'Martha Dixon', 'I guess you could say my childhood was strewn together with beautifully slivered oranges. Whether it was a birthday, wedding, Chinese New Year, or simply a fresh dessert on a weeknight, there was never an inappropriate time for my grandma to present a bouquet of orange slices. Its favored place in Chinese ...', 1),
      new BlogItem('assets/img/stock-img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg', 'The Perfect Holiday Cookie, Based on Your Zodiac Sign', 'Trevor Parker', 'Just in case you haven’t noticed already, we’ve launched a new feature that enables all of our community members to upload their own recipes through Kitchen Stories’ app! Ever since the launch, we’ve been marveling at the creativity and diversity …', 1),
      new BlogItem('', 'Everything You Need to Know About Preparing and Storing In Season Oranges', 'Edna Schwartz', 'I guess you could say my childhood was strewn together with beautifully slivered oranges. Whether it was a birthday, wedding, Chinese New Year, or simply a fresh dessert on a weeknight, there was never an inappropriate time for my grandma to present a bouquet of orange slices. Its favored place in Chinese ...', 1)
    ]
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onBlogSelected(index: number) {
    this.router.navigate([index], { relativeTo: this.route });
  }
}
