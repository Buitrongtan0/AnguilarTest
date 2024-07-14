import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Class {
  className: string;
  teacherName: string;
  SoTin: string;
  Status: string;
  MaMonHoc: string;
}

@Component({
  selector: 'app-modal-add-class',
  templateUrl: './modal-add-class.component.html',
  styleUrls: ['./modal-add-class.component.scss']
})
export class ModalAddClassComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{class: Class}>();
  class: Class = {
    className: '',
    teacherName: '',
    SoTin: '',
    Status: '',
    MaMonHoc: '',  
  };
  closeModal() {
    this.close.emit();
  }
  onSubmit() {
    this.submit.emit({class: this.class});
    // console.log(this.student)
    this.closeModal();
  }
}
