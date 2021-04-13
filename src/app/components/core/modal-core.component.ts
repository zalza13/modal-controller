import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HostComponentDirective } from 'src/app/directives/host-component.directive';
import { ComponentContainer } from 'src/app/models/component-container.model';

@Component({
  selector: 'app-modal-core',
  templateUrl: 'modal-core.component.html'
})
export class ModalCoreComponent implements OnInit, OnDestroy {
  @Input() component: ComponentContainer;
  @ViewChild(HostComponentDirective, { static: true }) hostComponent: HostComponentDirective;

  currentAdIndex = -1;
  interval: any;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.component.component);

    const viewContainerRef = this.hostComponent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.data = this.component.data;
  }

  ngOnDestroy() { }
}
