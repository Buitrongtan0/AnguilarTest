import { Component } from '@angular/core';
interface Class {
  className: string;
  teacherName: string;
  SoTin: string;
  Status: string;
  MaMonHoc: string;
}

@Component({
  selector: 'app-class-manager',
  templateUrl: './class-manager.component.html',
  styleUrls: ['./class-manager.component.scss']
})
export class ClassManagerComponent {
  title = 'Quản Lý Lớp Học';
  modalOpen: boolean = false;
  modalOpenEdit: boolean = false;
  class: Class[] = [];
  originalClass: Class = {
    className: '',
    teacherName: '',
    SoTin: '',
    Status: '',
    MaMonHoc: '',  
  };
  searchTerm: string = '';
  p: number = 1;
  filteredStudents() {
    if (!this.searchTerm) {
      return this.class; // khi searchTerm rỗng thì trả về students
    }
    return this.class.filter(a => 
      a.teacherName.toLowerCase().includes(this.searchTerm.toLowerCase()) // khi searchTerm khác rỗng thì trả về students có msv có chuỗi điều kiện 
    );
  }
  ngOnInit() {
    this.loadStudentsFromLocalStorage();
    // console.log(this.class)
    // console.log(this.originalClass)
  }
  saveStudentsToLocalStorage() {
    localStorage.setItem('class', JSON.stringify(this.class)); // save to localStorage
  }

  loadStudentsFromLocalStorage() {
    const classs = localStorage.getItem('class');
    if (classs) {
      this.class = JSON.parse(classs);
    }
    // hàm load students tu localStorage
  }
  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    // console.log('aaaaaa')
  }

  addStudent(classs: Class) {
    this.class.push(classs);
    this.saveStudentsToLocalStorage(); // Cập nhật lại localStorage sau khi add
    console.log(this.class)
  }

  openModalEdit(classs: Class) {
    this.originalClass = { ...classs }; // copy student, gán student cho originalStudent
    this.modalOpenEdit = true;
  }
  deleteStudent(index:number) {
      this.class.splice(index, 1);
      this.saveStudentsToLocalStorage(); // Cập nhật lại localStorage sau khi xóa
  }
  closeModalEdit() {
    this.modalOpenEdit = false;
  }
  EditStudent(originalClass: Class) {
    const index = this.class.findIndex(student => student.MaMonHoc === originalClass.MaMonHoc); // tìm và so theo index  của originalStudent với students
    if (index !== -1) {
      this.class[index] = { ...originalClass };
      this.saveStudentsToLocalStorage();
      this.closeModalEdit();
    }
  }
}
