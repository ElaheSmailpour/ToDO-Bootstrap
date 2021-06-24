import  {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { shoppingListService } from '../shopping-list/shopping-list-service';
import {Recipe} from './recipe.model'
@Injectable()
export class RecipeService {
recipeSelected=new EventEmitter<Recipe>()
 private recipes : Recipe[] = [
  new Recipe('A Test Recipe',
  'This is Simply a Test',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJOkRblMeK8tti3DKIGNSVRogdJ0uho2h3A&usqp=CAU',
   [
     new Ingredient('Meat',1),
     new Ingredient('French Fries',20)
   ]),
   new Recipe('Another Test Recipe',
  'This is Simply a Test', 
  'https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg'
  ,[
    new Ingredient('Buns',2),
     new Ingredient('Meat',1)
  ])
]
constructor(private slService:shoppingListService){

}
getRecipes(){
    return this.recipes.slice();
}
addIngredientsToShoppingList(ingredients:Ingredient[]){
this.slService.addIngredients(ingredients);
}
}