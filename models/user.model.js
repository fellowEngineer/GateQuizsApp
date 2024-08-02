import mongoose from "mongoose";


// Define the user schema
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            unique: true,
            validate: {
                validator: (value) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value),
                message: "Email is invalid"
            }
        },
        password: {
            type: String, //This section need some encryption
            required: [true, "Password is required"]
        },
        stream: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Stream',
            required: [true, "Stream reference is required"]
        },
        subjects: [
            {
            type: String,
            required: [true, "Subjects are required"]
        }
        ]
    }, 
    {
        timestamps: true
    }
);

// Pre-save hook to populate subjects based on the stream
userSchema.pre('save', async function (next) {
    try {
        // Populate the stream reference
        const user = this;
        await user.populate('stream').execPopulate();
        
        // Determine the subjects based on the stream
        if (user.stream) 
        {
            const streamName = user.stream.name;
            if (engineeringSubjects[streamName]) 
            {
                user.subjects = engineeringSubjects[streamName];
            } 
            else 
            {
                user.subjects = [];
            }
        }
        
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model("User", userSchema);

export default User;