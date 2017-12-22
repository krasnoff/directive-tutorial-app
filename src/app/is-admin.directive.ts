import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective {

  constructor(private templateRef: TemplateRef<any>, 
    private viewContainerRef: ViewContainerRef) { }


    @Input() set appIsAdmin(isAdmin: string) {
      if (isAdmin == "11111111"){
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
      else {
        this.viewContainerRef.clear();
      }
    }

}
