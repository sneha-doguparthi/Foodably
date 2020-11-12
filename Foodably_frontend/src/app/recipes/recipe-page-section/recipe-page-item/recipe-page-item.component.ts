import { RecipeItem } from './../../../shared/models/recipe-item.model';
import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipe-page-item',
  templateUrl: './recipe-page-item.component.html',
  styleUrls: ['./recipe-page-item.component.scss']
})
export class RecipePageItemComponent implements OnInit {
  @Input()
  recipePageItem: RecipeItem;
  constructor() { }

  ngOnInit() {
  }

}
