import mongoose from "mongoose";


const questionSchema = mongoose.Schema(
    {


    }, 
    
    {
        timestamps: true
    }
);




export const Question = mongoose.model("Question", questionSchema);