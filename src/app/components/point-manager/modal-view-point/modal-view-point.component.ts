import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-modal-view-point',
  templateUrl: './modal-view-point.component.html',
  styleUrls: ['./modal-view-point.component.scss']
})
export class ModalViewPointComponent {
  @Output() closeEdit = new EventEmitter<void>();
  @Input() originalStudent: Student = {
    msv: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    className: '',
    departmentName: '',
    points: [], 
    class: []   
  };
  closeModal() {
    this.closeEdit.emit();
  }
}
