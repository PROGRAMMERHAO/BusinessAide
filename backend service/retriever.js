// Module to get data from the database; returns information in an array
var admin = require("firebase-admin");
const db = admin.firestore();

getEmployeeData = async (employeeName) => {
  const employees = db.collection("employees");
  const nameArray = employeeName.split(" ");
  const nameRef = employees
    .where("firstName", "==", nameArray[0])
    .where("lastName", "==", nameArray[1]);
  const snapshot = await nameRef.get();
  if (snapshot.empty) {
    console.log("Cannot find an employee with a matching name");
    return -1;
  }

  assign = async (snap) => {
    snap.forEach(
      (doc) =>
        (dataObj = {
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          dob: doc.data().dob,
          workExp: doc.data().workExp,
          location: doc.data().location,
          title: doc.data().title,
          phoneNum: doc.data().phoneNum,
        })
    );
    return dataObj;
  };

  var data = await assign(snapshot);
  return data;
};
module.exports = { getEmployeeData };
