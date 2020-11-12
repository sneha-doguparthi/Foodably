import {RecipeItem} from './recipe-item.model';

export class RecipeSection {

  constructor(public header: string,
              public recipes: RecipeItem[]) {
  }
}
