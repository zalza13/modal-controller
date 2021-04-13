import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HostComponentDirective } from './directives/host-component.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { SetupDataService } from './services/setup-data.service';

import { ModalCoreComponent } from '../app/components/core/modal-core.component';
import { ModalControllerComponent } from '../app/components/core/modal-controller.component';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [
    SetupDataService
  ],
  declarations: [
    AppComponent,
    HostComponentDirective,
    ModalCoreComponent,
    ModalControllerComponent,
    Form1Component,
    Form2Component
  ],
  entryComponents: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor() { }
}

