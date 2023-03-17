import express from "express";
import {signupUser, loginUser} from "../controller/userController.js"
import { uploadImage, getImage} from "../controller/image-controller.js";
import { createPost, getAllPosts, getPost, updatePost, deletePost} from "../controller/post-controller.js";
import { newComment, getComments } from "../controller/comment-controller.js";
import {storMessage} from "../controller/message-controller.js"

import {authenticateToken} from'../controller/jwt-controller.js';
import upload from "../utils/upload.js"


const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World baba rahul!");
  });
router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage)
router.post('/create', authenticateToken, createPost)
// router.get('/posts', authenticateToken, getAllPosts)
// router.get('/post/:id', authenticateToken, getPost  )
router.get('/posts', getAllPosts)
router.get('/post/:id', getPost  )
router.put('/update/:id', authenticateToken, updatePost)
router.delete('/delete/:id', authenticateToken, deletePost)
router.post('/comment/new', authenticateToken, newComment)
router.get('/comments/:id', authenticateToken, getComments)
router.post('/message', authenticateToken, storMessage)


export default router