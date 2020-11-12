import { RecipeItem } from './../../../shared/models/recipe-item.model';

import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-more-recipe-item',
  templateUrl: './more-recipe-item.component.html',
  styleUrls: ['./more-recipe-item.component.scss']
})
export class MoreRecipeItemComponent implements OnInit {
  @Input()
  morerecipePageItem: RecipeItem;
  constructor() { }

  ngOnInit() {
  }

}
