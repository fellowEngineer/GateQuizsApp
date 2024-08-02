import { Subject } from "../models/subject.model";
import { Question } from "../models/question.model";



exports.newQuestion = async (req, res) => {
    try {
        const { question, description, options, hints, answer, explanation, subjectName } = req.body;

        if (!question || !options || !hints || !answer || !subjectName) {
            return res.status(400).json({ error: 'Question, options, hints, answer, and subject name are required' });
        }

        if (!Array.isArray(hints) || hints.length < 2) {
            return res.status(400).json({ error: 'At least two hints are required' });
        }

        // Validate options format
        if (typeof options !== 'object') {
            return res.status(400).json({ error: 'Options must be an object' });
        }

        // Find the subject and associated stream
        const subject = await Subject.findOne({ name: subjectName }).populate('stream');
        if (!subject) {
            return res.status(404).json({ error: 'Subject not found' });
        }

        // Create and save the question
        const questionData = new Question({
            question,
            description,
            options,
            hints,
            answer,
            explanation,
            subject: subject._id,
            stream: subject.stream._id
        });

        const result = await questionData.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}