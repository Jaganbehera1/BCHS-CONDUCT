export type SchoolType = 'open' | 'regular';

export interface CertificateData {
  schoolType: SchoolType;
  studentName: string;
  parentRelation: 'S/O' | 'D/O';
  fatherName: string;
  motherName: string;
  // Individual address fields
  at: string;
  po: string;
  ps: string;
  block: string;
  dist: string;
  state: string;
  pin: string;
  yearFrom: string;
  yearTo: string;
  issueDate?: Date;
}

export interface CertificateDataList {
  schoolType: SchoolType;
  students: CertificateData[];
  issueDate?: Date;
}