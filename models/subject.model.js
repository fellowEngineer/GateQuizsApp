import mongoose from "mongoose";


const subjectSchema = mongoose.Schema(
    {


    }, 
    
    {
        timestamps: true
    }
);




export const Subject = mongoose.model("Subject", subjectSchema);