const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require ('path');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 8080;

const animeRoute = require('./Routes/Anime');
//const gameRoute = require('./routes/Game');

const MONGODB_URI = 'mongodb+srv://Dejected:Hackathon2023@anime-game.k9zwxos.mongodb.net/test';


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!')
});

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(morgan('tiny'));
//app.use(express.json());
//app.use(express.urlencoded({extended: true}));
app.use('/anime', animeRoute);
//app.use('/game', gameRoute);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));