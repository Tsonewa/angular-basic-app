import { Ingredient } from 'src/app/ingredient/ingredient.model';
import { Subject} from 'rxjs';

export class ShoppingListService {
    ingredientListChanged = new Subject<Ingredient []>();
    ingredients: Ingredient[] = [new Ingredient('Tomatoes', 5),
    new Ingredient('Pasta', 1)];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientListChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientListChanged.next(this.ingredients.slice());
    }

}