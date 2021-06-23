import {Ingredient} from '../shared/ingredients.model'
export class shoppingListService {
    
    private  ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
      ]
      getIngredient(){
         return  this.ingredients.slice();
      }
      addIngredient(ingredient:Ingredient){
         this.ingredients.push(ingredient);
      }
}