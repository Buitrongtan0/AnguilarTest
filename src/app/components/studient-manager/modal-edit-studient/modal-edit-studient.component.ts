  import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    studentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      msv: [{ value: this.originalStudent.msv, disabled: true }, Validators.required],
      fullName: [this.originalStudent.fullName, Validators.required],
      phoneNumber: [this.originalStudent.phoneNumber, [Validators.required, Validators.pattern(/^\d+$/)]],
      address: [this.originalStudent.address, Validators.required],
      className: [this.originalStudent.className, Validators.required],
      departmentName: [this.originalStudent.departmentName, Validators.required],
    });
  }
    closeModal() {
      this.closeEdit.emit();
    }
    onEdit() {
      if (this.studentForm.valid) {
        this.submit.emit({ originalStudent: this.studentForm.getRawValue() });
        console.log(this.studentForm.value);
        this.closeModal();
      }
    }

  }
