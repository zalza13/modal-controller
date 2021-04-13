import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styles: [
  ]
})
export class FormPersonaComponent implements OnInit {
  @Input() data: Persona;
  formPersona: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { 
    this.formPersona = this._formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.formPersona.patchValue(this.data);
  }

}
