import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { shoppingListService } from '../shopping-list-service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInpurRef: any = ElementRef;
  @ViewChild("amountInput", { static: false }) amountInpurRef: any = ElementRef;
 
  constructor(private slService:shoppingListService) {

   }
  onAddItem() {
    const ingName=this.nameInpurRef.nativeElement.value;
    const ingAmount=this.amountInpurRef.nativeElement.value
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.slService.addIngredient(newIngredient)
  }
  ngOnInit(): void {
  }

}
