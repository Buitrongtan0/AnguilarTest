import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-studient-manager',
  templateUrl: './studient-manager.component.html',
  styleUrls: ['./studient-manager.component.scss']
})
export class StudientManagerComponent {
  title = 'Quản Lý Sinh Viên';
  modalOpen: boolean = false;
  modalOpenEdit: boolean = false;
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
  searchTerm: string = '';
  p: number = 1;
  filteredStudents() {
    if (!this.searchTerm) {
      return this.students; // khi searchTerm rỗng thì trả về students
    }
    return this.students.filter(student => 
      student.msv.toLowerCase().includes(this.searchTerm.toLowerCase()) // khi searchTerm khác rỗng thì trả về students có msv có chuỗi điều kiện 
    );
  }
  ngOnInit() {
    this.loadStudentsFromLocalStorage();
    // console.log(this.students)  // check lifecycle hiện thị khi reload website
  }
  saveStudentsToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(this.students)); // save to localStorage
  }

  loadStudentsFromLocalStorage() {
    const students = localStorage.getItem('students');
    if (students) {
      this.students = JSON.parse(students);
    }
    // hàm load students tu localStorage
  }
  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  addStudent(student: Student) {
    this.students.push(student);
    this.saveStudentsToLocalStorage(); // Cập nhật lại localStorage sau khi add
    console.log(this.students)
  }

  openModalEdit(student: Student) {
    this.originalStudent = { ...student }; // copy student, gán student cho originalStudent
    this.modalOpenEdit = true;
  }
  deleteStudent(index:number) {
      this.students.splice(index, 1);
      this.saveStudentsToLocalStorage(); // Cập nhật lại localStorage sau khi xóa
  }
  closeModalEdit() {
    this.modalOpenEdit = false;
  }
  EditStudent(originalStudent: Student) {
    const index = this.students.findIndex(student => student.msv === originalStudent.msv); // tìm và so theo index  của originalStudent với students
    if (index !== -1) {
      this.students[index] = { ...originalStudent };
      this.saveStudentsToLocalStorage();
      this.closeModalEdit();
    }
  }
}
