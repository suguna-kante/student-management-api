const express=require("express");
const router=express.Router();


//get all students move to controller
const {getStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent

}=require("../controllers/studentController");

router.get("/",getStudents);
router.post("/",createStudent);
router.get("/:id",getStudentById);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);



module.exports=router;