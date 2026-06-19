const Student = require("../models/Student");

//it is moved from router to get cleanrouter by using mvc structure
//it means post
const createStudent = async (req,res,next)=>{
   try{
      const student = await Student.create(req.body);

      res.status(201).json(student);

   }catch(err){
        next(err);
   }
};

//get single student by using id
const getStudentById = async (req,res,next)=>{
   try{

      const student = await Student.findById(req.params.id);
      if (!student) {
   return res.status(404).json({
      message: "Student not found"
   });
}

     res.status(200).json(student);

   }catch(err){

      next(err);
   }
};

//get all students 
const getStudents = async (req, res,next) => {
    try {
        
         const query = {};

      if (req.query.name) {
         query.name = req.query.name;
      }
      if(req.query.branch){
        query.branch=req.query.branch;
      }

        const page = Number(req.query.page) || 1;

const limit = Number(req.query.limit) || 5;

const skip = (page - 1) * limit;

const students = await Student.find(query)
    .skip(skip)
    .limit(limit);

        res.status(200).json(students);

    } catch (err) {

       next(err);
    }
};

//put
const updateStudent = async (req,res,next)=>{
   try{

      const student =
      await Student.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new:true }
      );
      if (!student) {
   return res.status(404).json({
      message: "Student not found"
   });
}

      res.status(200).json(student);

   }catch(err){

      next(err);
   }
};
//delete
const deleteStudent = async (req,res,next)=>{
   try{

      const student=await Student.findByIdAndDelete(
         req.params.id
      );
      if (!student) {
   return res.status(404).json({
      message: "Student not found"
   });
}

      res.status(200).json({
         message:"Student deleted successfully"
      });

   }catch(err){

      next(err);

   }
};

module.exports = {
    getStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent
};