import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';
import { ShoppingListService } from '../shoping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

  private recipes: Recipe[] = [new Recipe
        ('Spaghetti',
         'This simple spaghetti and meat sauce is bursting with flavor and will satisfy the most', 
         'https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg', [new Ingredient('Pasta', 2),  new Ingredient('Tomatos', 5), new Ingredient('Cheese', 1)]), 
        new Recipe('Pizza Pepperoni', 'Homemade pizza pepperoni description', 
        'https://www.simplyrecipes.com/thmb/qu-AslBeskzh_HG9H0dQAmcrdLQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg', 
        [new Ingredient('Flour', 2),  new Ingredient('Pepperoni', 5), new Ingredient('Cheese', 2)])];

constructor(private slService: ShoppingListService){}

        getRecipes(){
            return this.recipes.slice();
        }

        getRecipe(id: number){
            return this.recipes[id];
        }

        addIngredientsToSHopingList(ingredients: Ingredient[]){
            this.slService.addIngredients(ingredients);
        }
    }