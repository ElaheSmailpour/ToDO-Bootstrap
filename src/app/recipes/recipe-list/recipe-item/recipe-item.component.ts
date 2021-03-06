import { Component, Input,Output, OnInit,EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any = Recipe

@Output() recipeSelected= new EventEmitter();

  constructor() { }

  onSelected(){
this.recipeSelected.emit("")
  }
  ngOnInit(): void {
  }

}
