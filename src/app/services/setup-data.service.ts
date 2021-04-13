import { Injectable, Type } from '@angular/core';
import { ComponentContainer } from '../models/component-container.model';

@Injectable({
  providedIn: 'root'
})
export class SetupDataService {

  constructor() { }

  getComponent(component: Type<any>, data: any): ComponentContainer {
    return new ComponentContainer(component, data);
  }

}
