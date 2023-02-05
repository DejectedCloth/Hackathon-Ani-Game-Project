const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const schema = mongoose.Schema;
const AnimeSchema = new Schema({
    anime: [mongoose.Schema.Types.Mixed],
    watched: {type: Boolean}
});

const Anime = mongoose.model('Anime', AnimeSchema);

module.exports = Anime;