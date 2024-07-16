import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  classForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.classForm = this.fb.group({
      MaMonHoc: ['', Validators.required],
      className: ['', Validators.required],
      teacherName: ['', Validators.required],
      SoTin: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Status: ['', Validators.required]
    });
  }
  closeModal() {
    this.close.emit();
  }
  onSubmit() {
    if (this.classForm.valid) {
      this.submit.emit({ class: this.classForm.value });
      this.closeModal();
    }
  }
}
