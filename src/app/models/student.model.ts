export interface Student {
  msv: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  className: string;
  departmentName: string;
  points: Point[];
  class: Class[];
}
export interface Point {
  subjectName: string;
  SoTin: string;
  point: string;
}

export interface Class {
  className: string;
  teacherName: string;
  SoTin: string;
  Status: string;
  MaMonHoc: string;
}