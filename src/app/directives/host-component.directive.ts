// tslint:disable: directive-selector
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hostComponent]',
})
export class HostComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

