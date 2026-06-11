export interface Subject {
  name: string;
  creditHours: number;
  mark: number;
  points: number;
  grade: string;
}

export interface Summary {
  gpa: number;
  overallGrade: string;
  pointsSum: number;
  assignedHours: number;
  passedHours: number;
}

export interface StudentResult {
  _id: string;
  seatNumber: string;
  universityNumber: string;
  fullName: string;
  nationalId: string;
  department: string;
  level: string;
  subjects: Subject[];
  summary: Summary;
}

export interface LoginCredentials {
  seatNumber: string;
  nationalId: string;
}
