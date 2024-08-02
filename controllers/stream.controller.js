import Stream from "../models/stream.model";

exports.newStream = async (req, res) => {
    try {
        const { name, fullName, description } = req.body;

        // Validate required fields
        if (!name || !fullName) {
            return res.status(400).json({ error: 'Name and full name are required' });
        }

        // Validate name
        if (!["CSE", "IT", "ME", "CE", "EE", "APTITUDE"].includes(name)) {
            return res.status(400).json({ error: 'Invalid stream name' });
        }

        // Create and save the stream
        const stream = new Stream({ name, fullName, description });
        const result = await stream.save();
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}