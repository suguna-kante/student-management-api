const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const helmet=require("helmet");
const rateLimit=require("express-rate-limit");
require("dotenv").config();

const app = express();

app.use(express.json());

// Routes
const studentRoutes = require("./routes/studentRoutes");


// conncet auth route;
const authRoutes=require("./routes/authRoutes");


//post routes to connect
const postRoutes = require("./routes/postRoutes");


//after all this we apply error
const errorHandler=require("./middleware/errorMiddleware");


app.use(cors());
app.use(helmet());

const limiter=rateLimit({
    windowMs:15*60*1000,
    max :100
});
app.use(limiter);

app.use("/students", studentRoutes);
app.use("/auth",authRoutes);
app.use("/posts", postRoutes);
app.use(errorHandler);


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/collegeDb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
app.listen(5000, () => {
    console.log("Server Running");
});