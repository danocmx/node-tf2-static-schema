const getAttributes = () => () => require('./temp/attributes.json');
const getEffects = () => require('./temp/effects.json');
const getItemNames = () => require('./temp/item-names.json');
const getItems = () => require('./temp/items.json');
const getItemsGame = () => require('./temp/items-game.json');
const getLevels = () => require('./temp/levels.json');
const getLookups = () => require('./temp/lookups.json');
const getOrigins = () => require('./temp/origins.json');
const getPaintKits = () => require('./temp/paint-kits.json');
const getParts = () => require('./temp/parts.json');
const getQualities = () => require('./temp/qualities.json');
const getSets = () => require('./temp/sets.json');
const getKillstreaks = () => require('./temp/killstreaks.json');
const getWears = () => require('./temp/wears.json');

exports.static = {
    getAttributes,
    getEffects,
    getItemNames,
    getItems,
    getItemsGame,
    getLevels,
    getLookups,
    getOrigins,
    getPaintKits,
    getParts,
    getQualities,
    getSets,
    getKillstreaks,
    getWears,
}

/**
 * Lazy loading, incase you're not using any of the http/fs modules.
 */
exports.getNet = () => require('./src/index');
exports.getUpdate = () => require('./scripts/update');
