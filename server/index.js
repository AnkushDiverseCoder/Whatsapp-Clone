import express from 'express';
import dotenv from 'dotenv'
import connection from './database/db.js';
import router from './routes/route.js';
import cors from 'cors'


{/****************************  CREATED THE EXPRESS APP ****************************/}
const app = express();


{/****************************      SETTING UP REQ BODY ****************************/}
app.use(express.json());
app.use(express.urlencoded({extended:true}));


{/****************************      SETTING UP CORS ****************************/}
app.use(cors());


{/****************************  CONFIGURED THE DOTENV FILE****************************/}
dotenv.config();


{/****************************  CONNECTION TO THE DATABASE****************************/}
connection();
const PORT = process.env.PORT || 5000;


{/****************************  SETTING UP THE ROUTER ****************************/}
app.use('/' , router )


{/****************************  STARTED THE SERVER AT THE PORT 8000 ****************************/}
app.listen(PORT , (err)=>{
    if(err) { console.error(`&{err} on port ${PORT}`);}
    console.log(`Listening on port ${PORT}`);
})