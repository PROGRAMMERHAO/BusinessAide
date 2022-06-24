const express = require("express");
const app = express();
var admin = require("firebase-admin");
var serviceAccount = require("./service-account-file.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const retriever = require("./retriever.js");
const temp = retriever.getEmployeeData("blake charles");
var data;
temp.then((ans) => {
  data = ans;
  console.log(data);
});

app.get("/api", (req, res) => {
  res.json({
    data,
    /* firstName: data.firstName,
    lastName: data.lastName,
    dob: data.dob,
    workExp: data.workExp,
    location: data.location,
    title: data.title,
    phoneNum: data.phoneNum,
    */
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
