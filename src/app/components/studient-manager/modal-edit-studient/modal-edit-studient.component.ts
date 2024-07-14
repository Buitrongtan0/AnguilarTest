import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-modal-edit-studient',
  templateUrl: './modal-edit-studient.component.html',
  styleUrls: ['./modal-edit-studient.component.scss']
})
export class ModalEditStudientComponent {
  @Output() closeEdit = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{originalStudent: Student}>();
  @Input() originalStudent: Student = {
    msv: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    className: '',
    departmentName: '',
    points: [],
    class:[],
  };
  closeModal() {
    this.closeEdit.emit();
  }
  onEdit() {
    this.submit.emit({originalStudent: this.originalStudent});
    console.log(this.originalStudent)
    this.closeModal();
    
  }

}
