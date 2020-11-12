import {Component, Input, OnInit} from '@angular/core';
import {BlogArticle} from '../../shared/models/blog-article.model';
import {ArticleImage} from '../../shared/models/article-image.model';
import {RecipeItem} from '../../shared/models/recipe-item.model';
import {BlogParagraph} from '../../shared/models/blog-paragraph.model';
import {RecipeSection} from '../../shared/models/recipe-section.model';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  @Input()
  blog: BlogArticle;

  constructor() {

    const articleImage = new ArticleImage('assets/img/stock-img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg',
      'Aloe Vera A Wonder Herb For Skin');

    const paragraphOne = new BlogParagraph('Choosing A Static Caravan',
      // tslint:disable-next-line:max-line-length
      ['Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.', 'n a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that\'s filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.'],
      null);
    const paragraphTwo = new BlogParagraph(null, null, articleImage);
    const paragraphThree = new BlogParagraph(null,
      // tslint:disable-next-line:max-line-length
      ['Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit is the first known version ("Neither is there anyone who loves grief itself since it is grief and thus wants to obtain it"). It was found by Richard McClintock, a philologist, director of publications at Hampden-Sydney College in Virginia; he searched for citings of consectetur in classical Latin literature, a term of remarkably low frequency in that literary corpus.'],
      null);

    const paragraphs: BlogParagraph[] = [paragraphOne, paragraphTwo, paragraphThree];

    const recipeSection = new RecipeSection('Related recipes', [
      new RecipeItem('assets/img/stock-img/baiq-daling-ykThMylLsbY-unsplash.jpg', '30 min', 'Eggs en Cocotte', 'Alice Norris'),
      // tslint:disable-next-line:max-line-length
      new RecipeItem('assets/img/stock-img/martin-widenka-tkfRSPt-jdk-unsplash.jpg', '20 min', 'Petit beurre dessert', 'Randall Fisher')
    ]);

    // @ts-ignore
    this.blog = new BlogArticle('assets/img/stock-img/rachel-park-hrlvr2ZlUNk-unsplash.jpg',
      'Maui By Air The Best Way Around The Island',
      'Trevor Martin',
      456, paragraphs, recipeSection, new Date());
  }

  ngOnInit() {
  }
}
