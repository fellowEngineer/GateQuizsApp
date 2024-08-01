import mongoose from "mongoose";

const engineeringSubjects = {
    CSE: [
        "Data Structures",
        "Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Systems"
    ],
    IT: [
        "Software Engineering",
        "Web Development",
        "Information Security",
        "Database Management",
        "Network Protocols"
    ],
    ME: [
        "Thermodynamics",
        "Fluid Mechanics",
        "Machine Design",
        "Heat Transfer",
        "Manufacturing Processes"
    ],
    CE: [
        "Structural Analysis",
        "Geotechnical Engineering",
        "Hydraulics",
        "Environmental Engineering",
        "Construction Management"
    ],
    EE: [
        "Circuit Theory",
        "Electromagnetic Fields",
        "Power Systems",
        "Control Systems",
        "Digital Electronics"
    ]
};

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subject Name is required"],
        trim: true
    },
    code: {
        type: String,
        required: [true, "Subject code is required"],
        trim: true
    },
    stream: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stream',
        required: [true, "Stream reference is required"]
    },
    description: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

// Pre-save hook to validate subject name against stream
subjectSchema.pre('save', async function (next) {
    try {
        // Populate the stream reference
        const subject = this;
        await subject.populate('stream').execPopulate();
        
        // Validate the subject name based on the stream
        if (subject.stream) {
            const streamName = subject.stream.name;
            if (engineeringSubjects[streamName] && !engineeringSubjects[streamName].includes(subject.name)) {
                return next(new Error(`Subject '${subject.name}' is not valid for stream '${streamName}'`));
            }
        }
        
        next();
    } catch (error) {
        next(error);
    }
});



export const Subject = mongoose.model("Subject", subjectSchema);