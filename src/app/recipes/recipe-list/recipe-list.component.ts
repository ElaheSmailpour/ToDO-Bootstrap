import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('A Test Recipe','This is Simply a Test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJOkRblMeK8tti3DKIGNSVRogdJ0uho2h3A&usqp=CAU'),
    new Recipe('Another Test Recipe','This is Simply a Test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJOkRblMeK8tti3DKIGNSVRogdJ0uho2h3A&usqp=CAU')
]
onRecipeSelcted(recipe:Recipe){
this.recipeWasSelected.emit(recipe)
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
