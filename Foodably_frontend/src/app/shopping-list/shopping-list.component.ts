import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public shoppingList = [
    {name:"Chicken",qty:"500gm"},
    {name:"Oil",qty:"100ml"},
    {name:"Chillies",qty:"10g"}
  ];

  constructor() { }

  ngOnInit() {

  }
}
