import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  postId: { type: String, required: true },
  commentDate: { type: Date },
  comments: {
    type: String,
    required: true,
  },
});

const comment = mongoose.model("comment", commentSchema);

export default comment;
