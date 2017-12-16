import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputNumbersOnly]'
})
export class InputNumbersOnlyDirective {

  constructor() { }

  @HostListener('keydown', ['$event'])
  confirmFirst(event: KeyboardEvent) {
    if (!isNaN(Number(event.key))) {
      return true;
    }
    else {
      return false;
    }
  }

}
