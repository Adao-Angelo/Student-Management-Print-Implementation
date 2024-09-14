export const Students = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 18,
    grade: "12th",
    gpa: 3.8,
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 16,
    grade: "10th",
    gpa: 3.5,
    status: "Active",
  },
];
export interface IStudent {
  name: string;
  email: string;
  age: number;
  grade: string;
  gpa: number;
  status: string;
}
