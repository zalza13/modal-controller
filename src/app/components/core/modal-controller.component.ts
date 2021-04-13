import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ComponentContainer } from 'src/app/models/component-container.model';

@Component({
  selector: 'app-modal-controller',
  templateUrl: './modal-controller.component.html',
  styles: [
  ]
})
export class ModalControllerComponent implements OnInit {
  @Input() component: ComponentContainer<any>;
  @Input() title: string;
  @Input() buttonLabel: string;
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.title = this.component.data.title;
    this.buttonLabel = this.component.data.buttonLabel;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
