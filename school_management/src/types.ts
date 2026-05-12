export type SchoolType = 'open' | 'regular';

export interface CertificateData {
  schoolType: SchoolType;
  studentName: string;
  parentName: string;
  parentRelation: 'S/O' | 'D/O';
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