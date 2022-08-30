import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url="http://localhost:8000"

let gfs;
let gridFsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
   gridFsBucket =new mongoose.mongo.GridFSBucket(conn.db,{
      bucketName: 'media'
   });
   gfs = grid(conn.db,mongoose.mongo);
   gfs.collection('media')
})

export const uploadFile = async (req, res) => {
     if(!req.file){
        return res.status(400).send('file not found');
     }

     const imageUrl = `${url}/file/${req.file.filename}`;

     return res.status(200).json(imageUrl)
}

export const getImage = async (req, res) => {
   try {
      const file = await gfs.files.findOne({filename:req.params.filename});

      const readStream = gridFsBucket.openDownloadStream(file._id);
      readStream.pipe(res);
   } catch (error) {
      return res.status(500).json(error);
   }
}