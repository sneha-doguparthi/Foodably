import {BlogItem} from './blog-item.model';
import {BlogParagraph} from './blog-paragraph.model';
import {RecipeSection} from './recipe-section.model';

export class BlogArticle extends BlogItem {

  public paragraphs: BlogParagraph[];
  public relatedRecipes: RecipeSection;
  public createDate: Date = new Date();

  constructor(imagePath: string,
              title: string,
              author: string,
              comments: number,
              paragraphs: BlogParagraph[],
              relatedRecipes: RecipeSection,
              createDate: Date) {

    super(imagePath, title, author, '', comments);

    this.paragraphs = paragraphs;
    this.relatedRecipes = relatedRecipes;
    this.createDate = createDate;
  }
}
