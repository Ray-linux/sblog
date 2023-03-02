import express from 'express'
import Connection from './database/db.js'
import cors from 'cors'
import bodyParser from 'body-parser'

import Router  from './routes/route.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))

app.use('/', (req, res) => {
    res.json({message: "Hello Admin"});
})
// app.use('/', Router);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static("client/build"))
// }


const URL = process.env.MONGODB_URI || process.env.DB_URL
Connection(URL);

app.listen(PORT, () => {
    console.log(`server is up in ${PORT}`)
})

module.exports = app;