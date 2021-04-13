import { Injectable, Type } from '@angular/core';
import { ComponentContainer } from '../models/component-container.model';
import { ComponentData } from '../models/component-data.model';

@Injectable({
  providedIn: 'root'
})
export class SetupDataService {

  constructor() { }

  getComponent<T>(component: Type<any>, data: ComponentData<T>): ComponentContainer<T> {
    return new ComponentContainer(component, data);
  }

}
