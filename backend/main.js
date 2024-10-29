require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieparser = require('cookie-parser');


const URL = 'mongodb://localhost:27017/official_match';

mongoose.connect(URL)
    .then(connexion => {
        const app = express();
        const PORT = 5000;

        app.use(express.json());
        app.use(cors());
        // app.use(cookieparser());

        const authRoute = require('../backend/routers/auth.router');
        app.use('/auth', authRoute);
        
        
        // const adminRoute = require('./routes/admin.route');
        // app.use('/api/admin', adminRoute);

        app.listen(PORT, () => {
            console.log(`L'application est lancée sur le port ${PORT}`);
        });
    })
    .catch(error => {
        console.log(error);
    })

