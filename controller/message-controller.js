import Message from '../model/message.js'

export const storMessage = async( req, res) => {
    try {
        const message = await new Message(req.body);
        message.save();
        return res.status(200).json({ msg: "message send successfully" });
    } catch (e) {
        return res.status(500).json(e);
    }
}