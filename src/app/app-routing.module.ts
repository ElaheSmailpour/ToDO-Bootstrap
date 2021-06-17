import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';

import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

const routes: Routes = [

  {path:"recipe",component:RecipesComponent},
  {path:"shopping",component:ShoppingEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
