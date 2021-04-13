import { Type } from '@angular/core';
import { ComponentData } from './component-data.model';

export class ComponentContainer {
  constructor(public component: Type<any>, public data: ComponentData) {}
}
