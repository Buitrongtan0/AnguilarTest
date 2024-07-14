import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-point-manager',
  templateUrl: './point-manager.component.html',
  styleUrls: ['./point-manager.component.scss']
})
export class PointManagerComponent {
  title = 'Quản Lý Điểm - Theo Sinh Viên';
  modalOpenView: boolean = false;
  modalOpenEdit: boolean = false;
  searchTerm: string = '';
  p: number = 1;
  students: Student[] = [];
  originalStudent: Student = {
    msv: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    className: '',
    departmentName: '',
    points: [],
    class:[]
  };
  ngOnInit() {
    this.loadStudentsFromLocalStorage();
    // console.log(this.students)  // check lifecycle hiện thị khi reload website
  }
  loadStudentsFromLocalStorage() {
    const students = localStorage.getItem('students');
    if (students) {
      this.students = JSON.parse(students);
    }
    // hàm load students tu localStorage
  }

  filteredStudents() {
    if (!this.searchTerm) {
      return this.students;
    }
    return this.students.filter(student =>
      student.msv.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  closeModalEdit() {
    this.modalOpenEdit = false;
  }
  openModalEdit(student: Student) {
    this.originalStudent = { ...student }; // copy student, gán student cho originalStudent
    this.modalOpenEdit = true;
    this.saveStudentsToLocalStorage(); // Cập nhật lại localStorage sau khi add
  }
  EditStudent(originalStudent: Student) {
    const index = this.students.findIndex(student => student.msv === originalStudent.msv); // tìm và so theo index  của originalStudent với students
    if (index !== -1) {
      this.students[index] = { ...originalStudent };
      this.saveStudentsToLocalStorage();
      this.closeModalEdit();
    }
  }
  saveStudentsToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  openViewPoint(student: Student) {
    this.originalStudent = { ...student }; // copy student, gán student cho originalStudent
    this.modalOpenView = true;
    this.saveStudentsToLocalStorage(); // Cập nhật lại localStorage sau khi add
  }
  closeModalViewPoint = () => {
    this.modalOpenView = false;
  }
}
