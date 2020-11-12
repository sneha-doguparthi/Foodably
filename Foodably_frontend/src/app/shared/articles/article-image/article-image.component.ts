import {Component, Input } from '@angular/core';
import {ArticleImage} from '../../models/article-image.model';

@Component({
  selector: 'app-article-image',
  templateUrl: './article-image.component.html',
  styleUrls: ['./article-image.component.scss']
})
export class ArticleImageComponent {

  @Input()
  image: ArticleImage;
}
