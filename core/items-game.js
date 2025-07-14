// Parse this somehow
const axios = require('axios');
const vdf = require('vdf');

exports.getItemsGame = function () {
    return axios({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/SteamDatabase/GameTracking-TF2/master/tf/scripts/items/items_game.txt',
    }).then(({ data }) => vdf.parse(data)['items_game']);
};
