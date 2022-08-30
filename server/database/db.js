import mongoose from 'mongoose';

const connection = async ()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true, // it tells db to use lastest features 
            })
            console.log('Connected to Mongoose database')
    } catch (error) {
        console.error( 'error connecting to Mongoose database',error.message);
    }
}

export default connection;