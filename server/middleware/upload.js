import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage'
import dotenv from 'dotenv'

dotenv.config();

const storage = new GridFsStorage({
    url: process.env.MONGODB_URI,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (req, file) => {
        return {
            bucketName: "media",
            filename:`${Date.now()}-file-${file.originalname}`,
        }
    },
});

export default multer({ storage });

