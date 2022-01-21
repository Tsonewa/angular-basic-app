import { Ingredient } from 'src/app/ingredient/ingredient.model';
import { Subject} from 'rxjs';

export class ShoppingListService {
    ingredientListChanged = new Subject<Ingredient []>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = [new Ingredient('Tomatoes', 5),
    new Ingredient('Pasta', 1)];

    getIngredients(){
        return this.ingredients.slice();
    }

getIngredient(index: number){
    return this.ingredients[index];
}

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientListChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientListChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientListChanged.next(this.ingredients.slice());
    }

}