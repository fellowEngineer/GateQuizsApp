import mongoose from "mongoose";


const questionSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required: [true, "Question text is required"],
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        options: {
            type: Map,
            of: String,
            required: [true, "Options are required"]
        },
        hints: {
            type: [String],
            validate: {
                validator: v => v.length >= 2,
                message: "At least two hints are required"
            },
            required: [true, "Hints are required"]
        },
        answer: {
            type: String,
            required: [true, "Answer is required"],
            trim: true
        },
        explanation: {
            type: String,
            trim: true
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject',
            required: [true, "Subject reference is required"]
        },
        stream: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Stream',
            required: [true, "Stream reference is required"]
        }
    }, 
    
    {
        timestamps: true
    }
);




export const Question = mongoose.model("Question", questionSchema);