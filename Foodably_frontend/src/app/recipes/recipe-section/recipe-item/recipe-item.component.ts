import { Component, Input, OnInit } from '@angular/core';
import { RecipeItem } from '../../../shared/models/recipe-item.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipeItem: RecipeItem;

  constructor() { }

  ngOnInit() {
  }

}
