import { Component, OnInit } from '@angular/core';

import { ComponentContainer } from './models/component-container.model';
import { Form1Component } from './components/form1/form1.component';
import { SetupDataService } from './services/setup-data.service';
import { Form2Component } from './components/form2/form2.component';
import { Persona } from './models/persona.model';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  form1: ComponentContainer<any>;
  form2: ComponentContainer<any>;

  listPersonas: Persona[] = [
    { id: 1, nombre: 'Juan Perez', edad: 34 },
    { id: 2, nombre: 'Jorge Garcia', edad: 44 },
    { id: 3, nombre: 'Roberto Gomez', edad: 53 },
    { id: 4, nombre: 'Pedro Sanchez', edad: 23 }
  ];

  constructor(private _serviceDataSetup: SetupDataService) {
    this.form1 = this._serviceDataSetup.getComponent<any>(Form1Component, <any>{ title: 'Ejemplo Modal 1', buttonLabel: 'Modal 1' });
    this.form2 = this._serviceDataSetup.getComponent<any>(Form2Component, <any>{ title: 'Ejemplo Modal 2', buttonLabel: 'Modal 2' });
  }

  ngOnInit() {

  }

  getModalContext(persona: Persona) {
    return this._serviceDataSetup
      .getComponent<Persona>(
        FormPersonaComponent,
        {
          title: 'Editar Persona',
          buttonLabel: 'Editar',
          data: persona
        });
  }
}

