const axios = require('axios');
const vdf = require('vdf');

exports.getPaintKits = function getPaintKits() {
    return axios({
        method: 'GET',
        // Using SteamDB repo due to having better uptime than tf2 wiki
        url: 'https://raw.githubusercontent.com/SteamDatabase/GameTracking-TF2/master/tf/resource/tf_proto_obj_defs_english.txt',
    }).then(({ data }) => parsePaintKitsResponse(data));
};

function parsePaintKitsResponse(response) {
    const parsedResponse = vdf.parse(response);
    const rawPaintKits = parsedResponse.lang.Tokens;

    const rawPaintKitsKeys = Object.keys(rawPaintKits);
    const paintkits = {};
    for (let i = 0; i < rawPaintKitsKeys.length; i++) {
        const protodef = rawPaintKitsKeys[i];

        const [_, type, paintkitId] = protodef.match(/^(\d+)_(\d+)_field/);
        if (!paintkitId) continue;
        if (type !== '9') continue;

        const name = rawPaintKits[protodef];
        if (name.startsWith(`${type}: `)) continue;

        paintkits[paintkitId] = name;
        paintkits[name] = paintkitId;
    }

    return paintkits;
}
