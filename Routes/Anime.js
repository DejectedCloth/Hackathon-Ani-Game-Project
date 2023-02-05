const express = require('express');
const {isObjectIdOrHexString, default: mongoose} = require('mongoose');
const {db} = require('../Models/Anime');

const router = express.Router();

const Anime = require('../Models/Anime');

router.get('/', (req, res) => {
    Anime.find({})
        .then((data) =>{
            res.send(data);
        })
        .catch((error) => {
            console.log('error', error);
        });
});

router.post('/saveanime', (req,res) => {
    //console.log(req.body.id);
    //res.send(req.body.id);
    const newAnime = new Anime({
        anime: req.body.id,
        watched: false
    });

    newAnime.save((error) => {
        if(error) {
            console.log('Something went wrong');
        } else {
            console.log('Data has been saved');
        }
    });
    res.redirect('http://localhost:3000');
});

router.post('/saveanimewatched', (req,res) => {
    //console.log(req.body.id);
    //res.send(req.body.id);
    const newAnime = new Anime({
        anime: req.body.id,
        watched: true
    });

    newAnime.save((error) => {
        if(error) {
            console.log('Something went wrong');
        } else {
            console.log('Data has been saved');
        }
    });
    res.redirect('http://localhost:3000');
});

router.post('/swapwatched', (req,res) => {
    Anime.findOne({_id: req.body.id})
        .then((data) => {
            data.watched = true;
            data.save((error) => {
                if(error) {
                    console.log('there was an error saving');
                } else {
                    console.log('data saved');
                }
            });
        })
        .catch((error) => {
            console.log(error);
        });
        res.redirect('http://localhost:3000');
});

router.post('/swapwatchlist', (req,res) => {
    Anime.findOne({_id: req.body.id})
        .then((data) => {
            data.watched = false;
            data.save((error) => {
                if(error) {
                    console.log('there was an error saving');
                } else {
                    console.log('data saved');
                }
            });
        })
        .catch((error) => {
            console.log(error);
        });
        res.redirect('http://localhost:3000');
});

router.delete('/deletewatchlist', (req, res) => {
    Anime.findOneAndDelete({_id: req.body.id})
        .then((data) => {

        })
        .catch((error) => {
            console.log(error);
        });
    res.redirect('http://localhost:3000');
});

router.delete('/deletewatched', (req, res) => {
    Anime.findOneAndDelete({_id: req.body.id})
        .then((data) => {

        })
        .catch((error) => {
            console.log(error);
        });
    res.redirect('http://localhost:3000');
});

module.exports = router;

