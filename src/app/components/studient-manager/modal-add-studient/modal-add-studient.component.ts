import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-modal-add-studient',
  templateUrl: './modal-add-studient.component.html',
  styleUrls: ['./modal-add-studient.component.scss']
})
export class ModalAddStudientComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{student: Student}>();
  student: Student = {
    msv: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    className: '',
    departmentName: '',
    points: [],
    class:[]
  }
  closeModal() {
    this.close.emit();
  }
  onSubmit() {
    this.submit.emit({student: this.student});
    // console.log(this.student)
    this.closeModal();
  }
}
