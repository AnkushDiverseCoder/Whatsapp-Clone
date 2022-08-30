import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } })  //$all check all the feild that are mentioned in the array

    if (exist) {
      return res.status(200).json('conversation already exists');
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId]
    })
    await newConversation.save();
    res.status(200).json("added conversation successfully");
  } catch (error) {
    res.status(500)
    console.error('error in the conversation model api ', error.message);
  }
};
export const getConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    let conversation = await Conversation.findOne({ members: { $all: [receiverId, senderId] } })
    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(500).json('error in the conversation model api ', error.message);
  }
};