import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model'
export class shoppingListService {
   ingredientsChange = new EventEmitter<Ingredient[]>()
   private ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10),
   ]
   getIngredient() {
      return this.ingredients;
   }
   addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChange.emit(this.ingredients.slice())
   }

   addIngredients(ingredient: Ingredient[]) {
      //for (let ingredient of ingredients){
      //this.addIngredient(ingredient)
      //}
      this.ingredients.push(...this.ingredients);
      this.ingredientsChange.emit(this.ingredients.slice())
   }
}