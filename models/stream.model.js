import mongoose from "mongoose";


const streamSchema = mongoose.Schema(
    {
        name : {
            type : String,
            enum : [
                "CSE", 
                "IT", 
                "ME", 
                "CE", 
                "EE", 
                "APTITUDE"
            ],
            required : [true, "Stream name is required"]
        },
        fullName : {
            type : String,
            required : [true, "Stream name is required"],
            trim : true,
            validate : {
                validator : function (value) {
                    const validFullName = {
                        "CSE": "Computer Science and Engineering",
                        "IT": "Information Technology",
                        "ME": "Mechanical Engineering",
                        "CE": "Civil Engineering",
                        "EE": "Electrical Engineering",
                        "APTITUDE": "Aptitude Tests and Preparation",
                    };

                    return validFullName[this.name] === value;
                },
                message: props => `Full name for '${props.value}' does not match the predefined value for '${props.instance.name}'`
            }
        },
        description: {
            type: String,
            trim: true,
        }
    }, 
    
    {
        timestamps: true
    }
);




export const Stream = mongoose.model("Stream", streamSchema);