import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model'
import { shoppingListService } from './shopping-list-service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []
  constructor(private slService: shoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredient();
    this.slService.ingredientsChange
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = this.ingredients;
      })
  }

}
