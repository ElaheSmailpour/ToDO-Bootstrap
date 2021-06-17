import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInpurRef: any = ElementRef;
  @ViewChild("amountInput", { static: false }) amountInpurRef: any = ElementRef;
 @Output() ingredientadded = new EventEmitter<Ingredient>()
  constructor() { }
  onAddItem() {
    const ingName=this.nameInpurRef.nativeElement.value;
    const ingAmount=this.amountInpurRef.nativeElement.value
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.ingredientadded.emit(newIngredient)
  }
  ngOnInit(): void {
  }

}
