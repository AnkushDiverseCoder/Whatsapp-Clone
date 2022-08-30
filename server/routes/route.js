import express from 'express'; 
//importing the controllers for our api
import { newConversation , getConversation } from '../controller/ConversationController.js';
import { getImage, uploadFile } from '../controller/ImageController.js';
import { setMessage , getMessage } from '../controller/MessageController.js';
import { addUser , getUser } from '../controller/UserController.js'; 
import upload  from '../middleware/upload.js';

const router = express.Router();

// User 
router.post('/adduser', addUser )
router.get('/getuser', getUser )
 //conversation
router.post('/setconversation', newConversation )
router.post('/getconversation', getConversation )
//messages 
router.post('/setmessage', setMessage )
router.get('/getmessage/:id', getMessage )
//Upload File
router.post('/uploadfile',upload.single('file'), uploadFile )
router.get('/file/:filename', getImage )


export default router