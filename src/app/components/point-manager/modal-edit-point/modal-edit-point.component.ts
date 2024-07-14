import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-modal-edit-point',
  templateUrl: './modal-edit-point.component.html',
  styleUrls: ['./modal-edit-point.component.scss']
})
export class ModalEditPointComponent {
  @Output() closeEdit = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ originalStudent: Student }>();
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
  openSubject: boolean = true;

  closeModal() {
    this.closeEdit.emit();
  }
  addSubject() {
    // Add a new empty subject to the points array
    this.originalStudent.points.push({ subjectName: '', SoTin: '', point: '' });
    this.openSubject = false;
  }
  onEdit() {
    this.submit.emit({ originalStudent: this.originalStudent });
    console.log(this.originalStudent)
    this.closeModal();
  }
}
