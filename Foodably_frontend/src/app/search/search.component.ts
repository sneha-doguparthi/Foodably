import { Component, Input, OnInit, } from '@angular/core';
import { RecipeItem } from '../shared/models/recipe-item.model';
import { AdvSearchComponent } from '../shared/forms/adv-search/adv-search.component';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isAdvSearchOpen = false;

  @Input()
  recipeSections = [{
      recipes: [
        new RecipeItem('assets/img/stock-img/eiliv-sonas-aceron-FoHTUTU8SzE-unsplash.jpg', '40 min', 'Petit beurre dessert',  'Made by Seth Carson'),
        new RecipeItem('assets/img/stock-img/baiq-daling-ykThMylLsbY-unsplash.jpg', '30 min', 'Eggs en Cocotte', 'Made by Alice Norris'),
        new RecipeItem('assets/img/stock-img/aigars-peda-HEG9RhlLKTY-unsplash.jpg', '15 min', 'Salmon rice soup with ginger and garlic', 'Made by Eunice Bush'),
        new RecipeItem('assets/img/stock-img/martin-widenka-tkfRSPt-jdk-unsplash.jpg', '20 min', 'Petit beurre dessert', 'Made by Randall Fisher')
      ]
    },
    {
      recipes: [
        new RecipeItem('assets/img/stock-img/eiliv-sonas-aceron-FoHTUTU8SzE-unsplash.jpg', '40 min', 'Petit beurre dessert',  'Made by Seth Carson'),
        new RecipeItem('assets/img/stock-img/baiq-daling-ykThMylLsbY-unsplash.jpg', '30 min', 'Eggs en Cocotte', 'Made by Alice Norris'),
        new RecipeItem('assets/img/stock-img/aigars-peda-HEG9RhlLKTY-unsplash.jpg', '15 min', 'Salmon rice soup with ginger and garlic', 'Made by Eunice Bush'),
        new RecipeItem('assets/img/stock-img/martin-widenka-tkfRSPt-jdk-unsplash.jpg', '20 min', 'Petit beurre dessert', 'Made by Randall Fisher')
      ]
    }
  ];



 constructor( public dialog: MatDialog) { 
 // constructor(){
   

  }

  ngOnInit() {
  }
  
  onSearch(){
    const dialogRef = this.dialog.open(AdvSearchComponent, {
      width: '250px',
      height: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
 
}
