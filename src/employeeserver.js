import { db } from "./firebaseini";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const employeeCollectionRef = collection(db, "Employees");
class EmployeeDataService {
  addEmployee = (newEmployee) => {
    return addDoc(employeeCollectionRef, newEmployee);
  };

  updatedEmployee = (id, updatedEmployee) => {
    const bookDoc = doc(db, "Employees", id);
    return updateDoc(bookDoc, updatedEmployee);
  };

  deleteEmployee = (id) => {
    const employeeDoc = doc(db, "Employees", id);
    return deleteDoc(employeeDoc);
  };

  getALLEmployee = () => {
    return getDocs(employeeCollectionRef);
  };

  getEmployee = (id) => {
    const EmployeeDoc = doc(db, "Employees", id);
    return getDoc(EmployeeDoc);
  };
}

export default new EmployeeDataService();
