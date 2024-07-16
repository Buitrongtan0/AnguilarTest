import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  editClassForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.editClassForm = this.fb.group({
      MaMonHoc: [this.originalClass.MaMonHoc, Validators.required],
      className: [this.originalClass.className, Validators.required],
      teacherName: [this.originalClass.teacherName, Validators.required],
      SoTin: [this.originalClass.SoTin, Validators.required],
      Status: [this.originalClass.Status, Validators.required],
    });
  }
  closeModal() {
    this.closeEdit.emit();
  }
  onEdit() {
    if (this.editClassForm.valid) {
      this.submit.emit({ originalClass: this.editClassForm.value });
      console.log(this.editClassForm.value);
      this.closeModal();
    } else {
      console.log('Form is invalid');
    }
  }
}

