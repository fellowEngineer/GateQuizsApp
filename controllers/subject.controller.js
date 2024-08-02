import { Stream } from "../models/stream.model";
import { Subject } from "../models/subject.model";


exports.newSubject = async (req, res) => {
    try {
        const { name, code, streamName, description } = req.body;

        if (!name || !code || !streamName) {
            return res.status(400).json({ error: 'Name, code, and stream name are required' });
        }

        // Validate subject name based on stream
        const stream = await Stream.findOne({ name: streamName });
        if (!stream) {
            return res.status(404).json({ error: 'Stream not found' });
        }

        if (!engineeringSubjects[streamName].includes(name)) {
            return res.status(400).json({ error: `Subject '${name}' is not valid for stream '${streamName}'` });
        }

        // Create and save the subject
        const subject = new Subject({ name, code, stream: stream._id, description });
        const result = await subject.save();
        res.status(201).json(result);


    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}













