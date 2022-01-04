import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Tomatoes', 5),
  new Ingredient('Pasta', 1)];
  constructor() { }

  ngOnInit(): void {
  }
  
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
