import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/ingredient/ingredient.model';

export class ShoppingListService {
    ingredientListChanged = new EventEmitter<Ingredient []>();
    ingredients: Ingredient[] = [new Ingredient('Tomatoes', 5),
    new Ingredient('Pasta', 1)];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientListChanged.emit(this.ingredients.slice());
    }

}