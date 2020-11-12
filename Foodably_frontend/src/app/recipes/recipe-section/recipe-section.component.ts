import {Component, Input, OnInit} from '@angular/core';
import {RecipeItem} from '../../shared/models/recipe-item.model';

@Component({
  selector: 'app-recipe-section',
  templateUrl: './recipe-section.component.html',
  styleUrls: ['./recipe-section.component.scss']
})
export class RecipeSectionComponent implements OnInit {

  @Input()
  recipeSection: {
    header: string,
    recipes: RecipeItem[]
  };

  constructor() { }

  ngOnInit() {
  }

}
