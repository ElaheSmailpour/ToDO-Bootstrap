import {Recipe} from './recipe.model'
export class RecipeService {

 private recipes : Recipe[] = [
  new Recipe('A Test Recipe','This is Simply a Test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJOkRblMeK8tti3DKIGNSVRogdJ0uho2h3A&usqp=CAU'),
  new Recipe('Another Test Recipe','This is Simply a Test', 'https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg')
]
getRecipes(){
    return this.recipes.slice();
}
}