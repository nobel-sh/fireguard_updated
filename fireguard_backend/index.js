const express = require('express');
const connectDB = require('./config/db');
const adminRouter = require('./route/admin');
const locationRouter = require('./route/location');
const incidentRouter = require('./route/incident');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/admin', adminRouter);
app.use('/api/location', locationRouter);
app.use('/api/incident', incidentRouter);

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        });
        
    }catch(e){
        console.log(e);
    }
}

start();
