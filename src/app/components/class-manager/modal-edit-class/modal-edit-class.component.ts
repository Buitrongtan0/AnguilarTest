import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Class } from 'src/app/models/student.model';

@Component({
  selector: 'app-modal-edit-class',
  templateUrl: './modal-edit-class.component.html',
  styleUrls: ['./modal-edit-class.component.scss']
})
export class ModalEditClassComponent {
  @Output() closeEdit = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{originalClass: Class}>();
  @Input() originalClass: Class = {
    className: '',
    teacherName: '',
    SoTin: '',
    Status: '',
    MaMonHoc: '',
  };
  closeModal() {
    this.closeEdit.emit();
  }
  onEdit() {
    this.submit.emit({originalClass: this.originalClass});
    console.log(this.originalClass)
    this.closeModal();
  }
}
