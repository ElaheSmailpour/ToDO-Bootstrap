import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector: '[appDropdown]'
    })
export class dropdownDrective {
  
    @HostBinding('class.Open') isOpen = false; 
@HostListener('click') toggleOpen () {
    this.isOpen = !this.isOpen;
}
}