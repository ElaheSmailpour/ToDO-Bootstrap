import { Component } from '@angular/core';
import {Model, TodoItem} from '../models/model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Hello ';
 model = new Model()
 getName(){
   return this.model.user
 }
 getTodoItems(){
   return this.model.items
 }
 addItem(newTask:any){
if(newTask != ""){
  this.model.items.push(new TodoItem(newTask,false))

}
 }
}
