import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Hello ';
  onSubmit(num1:string,num2:string){
    var addnum= parseInt(num1) + parseInt(num2)
console.log("addnum=",addnum)
  }
}
