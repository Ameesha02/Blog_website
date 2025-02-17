import express from 'express'


// import { signupuser } from '../controller/user-controller';
import { loginUser } from '../controller/user-controller.js';
import { signupuser } from '../controller/user-controller.js';
import { uploadImage } from '../controller/image-controller.js';
import { createPost } from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import { getImage } from '../controller/image-controller.js';
import { getAllPosts,updatePost,deletePost } from '../controller/post-controller.js';
import upload from '../utils/upload.js';
import { newComment ,getComments,deleteComment} from '../controller/comment-controller.js';
import { getPost } from '../controller/post-controller.js';
const router =express.Router();

router.post('/signup',signupuser)
router.post('/login',loginUser)
// router.post('/logout', logoutUser);

// router.post('/token', createNewToken);

router.post('/create', authenticateToken, createPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);

router.get('/post/:id', authenticateToken, getPost);
router.get('/posts', authenticateToken, getAllPosts);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment);

 export default router;