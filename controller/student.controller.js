
const studentModel = require("../models/Student");
async function getAllStudent (req,res)
{
    const studentfind = await studentModel.find();
    //   console.log(studentfind);
    if(studentfind.length==0)
    {
        res.status(200).json({
            message:"student record empty"
        })
    }    
    res.status(200).json(studentfind);
}

async function addStudent(req,res)
{
    try{
        const{name,address} = req.body;
            const addStudent = new studentModel({name:name, address: address});

            await addStudent.save();

            res.status(200).json({
                message:"Student inserted successfully"
            })
    }

    catch(error)
    {
        console.log("Error>>>"+ error);
    }   
}

module.exports = {
    getAllStudent,
    addStudent
}