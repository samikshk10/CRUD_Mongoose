const express = require("express");

const studentRoutes= express.Router();
const studentController = require("../controller/student.controller");

studentRoutes.get("/getall-student",studentController.getAllStudent);
studentRoutes.post("/add-student",studentController.addStudent);

module.exports= studentRoutes;