import { Type } from '@angular/core';
import { ComponentData } from './component-data.model';

export class ComponentContainer<T> {
  constructor(
    public component: Type<any>,
    public data: ComponentData<T>) { }
}
