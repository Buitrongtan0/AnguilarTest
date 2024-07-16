import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-modal-add-studient',
  templateUrl: './modal-add-studient.component.html',
  styleUrls: ['./modal-add-studient.component.scss']
})
export class ModalAddStudientComponent {
  @Input() isOpen: boolean = false;
  @Input() studentForm!: FormGroup;
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
  studientform!: FormGroup
  constructor(private fb: FormBuilder) { 
    this.studentForm = this.fb.group({
      msv: ['', [Validators.required]],
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]],
      className: ['', [Validators.required]],
      departmentName: ['', [Validators.required]]
    });
  }
  closeModal() {
    this.close.emit();
  }
  onSubmit() {
    if (this.studentForm.valid) {
      this.submit.emit({ student: this.studentForm.value });
      // console.log(this.student)
      this.closeModal();
    }
  }
}
