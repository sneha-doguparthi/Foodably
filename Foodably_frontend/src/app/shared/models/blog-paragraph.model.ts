import {BlogImage} from './blog-image.model';

export class BlogParagraph {

  constructor(public header: string,
              public content: string[],
              public image: BlogImage) {
  }

  getType() {
    return this.image === null ? 'text' : 'image';
  }
}
