import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        requireed: true,
        unique: true
    },
    description: {
        type: String,
        requireed: true,
    },
    picture: {
        type: String,
    },
    username: {
        type: String,
        requireed: true,
    },
    categories: {
        type: String,
        requireed: true,
    },
    createdDate: {
        type: Date,
    }

})


const post = mongoose.model('post', postSchema);

export default post