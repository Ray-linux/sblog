import dotenv from 'dotenv'
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

dotenv.config();

const storage = new GridFsStorage({
    // url: `mongodb://localhost:27017/blog`,
    url: process.env.DB_URL,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1){
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 