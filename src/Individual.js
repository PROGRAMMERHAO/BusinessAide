import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EmployeeDataService from "./employeeserver";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CakeIcon from "@mui/icons-material/Cake";
import WorkIcon from "@mui/icons-material/Work";

export default function Individual() {
  const [employees, setEmployees] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getEmployees(id);
  }, [id]);

  const getEmployees = async (id) => {
    const data = await EmployeeDataService.getEmployee(id);
    console.log(
      data._document.data.value.mapValue.fields.Firstname.stringValue
    );
    setEmployees(data);
  };

  console.log(employees);

  if (employees.length === 0) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  } else {
    return (
      <div className="list" rowspacing={3}>
        <div
          style={{
            backgroundImage: `url("https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg")`,
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/476/476844.png"
            alt=""
            height={200}
            width={200}
          />
        </div>
        <AccountCircleIcon></AccountCircleIcon>
        Name:{" "}
        {
          employees._document.data.value.mapValue.fields.Firstname.stringValue
        }{" "}
        {employees._document.data.value.mapValue.fields.Lastname.stringValue}
        <div>
          <AddIcCallIcon></AddIcCallIcon>
          Phone number:
        </div>
        <div>
          <AddLocationIcon></AddLocationIcon>
          Location:
        </div>
        <div>
          <CakeIcon></CakeIcon>
          Date of Birth:
        </div>
        <div>
          <WorkIcon></WorkIcon>
          Years of Working:
        </div>
      </div>
    );
  }

  //console.log(employees);
}

/*const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const Employees = state.firestore.data.Employees;
  const employee = Employees[id];
  return { employee: employee };
};*/

/*export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Employees" }])
)(Individual);*/
