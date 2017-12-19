import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appProgressBar]'
})
export class ProgressBarDirective {

  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainerRef: ViewContainerRef) { }

    @Input() set appProgressBar(numberOfDots: number) {
      this.startLoop(numberOfDots);
    }

    startLoop(numberOfDots: number)
    {
      for (var i = 1; i <= numberOfDots; i++)
      {numberOfDots
        setTimeout(()=>{
          this.viewContainerRef.createEmbeddedView(this.templateRef);
          if (i == numberOfDots) {
            this.viewContainerRef.clear();
            //this.startLoop(numberOfDots);
          }
        }, i * 500);
      }
    }

}
