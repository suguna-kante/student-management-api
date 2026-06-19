const express=require("express");
const router=express.Router();
const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const authMiddleware=require("../middleware/authMiddleware");

router.post("/login",async(req,res)=>{
    try{
        const user=await User.findOne({
            email:req.body.email
        });
        if(!user){
            return res.status(400).json({
                message : "invalid user"

            });
        }
        const isMatch=await bcrypt.compare(
            req.body.password,
            user.password
        );
        if(!isMatch){
            return res.status(400).json({
                message : "invalid password"
            });
        }
        const token=jwt.sign({
            userID:user._id
        },
        process.env.JWT_SECRET,
            {
                expiresIn: "1d"
        }
    );
    res.status(200).json({
        token
    });
        

    }catch(err){
        res.status(500).json({
            message : err.message
        });
    }
});
router.post("/register",async(req,res)=>{
    try{
        const hashedPasword=await bcrypt.hash(
            req.body.password,
            10
        );
        const user=await User.create({username:req.body.username,
            email:req.body.email,
            password:hashedPasword
    });
        res.status(201).json(user);
    }catch(err){
        res.status(500).json({
            message : err.message
        });
        
    }
});

router.get("/profile",authMiddleware,(req,res)=>{
    res.status(200).json({
        message : "Welcone user",
        user:req.user
    });
    
});

module.exports=router;