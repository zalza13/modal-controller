import { Component, OnInit } from '@angular/core';

import { ComponentContainer } from './models/component-container.model';
import { Form1Component } from './components/form1/form1.component';
import { SetupDataService } from './services/setup-data.service';
import { Form2Component } from './components/form2/form2.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  form1: ComponentContainer;
  form2: ComponentContainer;

  constructor(private _serviceDataSetup: SetupDataService) {

    this.form1 = this._serviceDataSetup.getComponent(Form1Component, { title: 'Ejemplo Modal 1', buttonLabel: 'Modal 1' });
    this.form2 = this._serviceDataSetup.getComponent(Form2Component, { title: 'Ejemplo Modal 2', buttonLabel: 'Modal 2' });
  }

  ngOnInit() {

  }
}

