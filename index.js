const getAttributes = () => () => require('./static/attributes.json');
const getEffects = () => require('./static/effects.json');
const getItemNames = () => require('./static/item-names.json');
const getItems = () => require('./static/items.json');
const getItemsGame = () => require('./static/items-game.json');
const getLevels = () => require('./static/levels.json');
const getLookups = () => require('./static/lookups.json');
const getOrigins = () => require('./static/origins.json');
const getPaintKits = () => require('./static/paint-kits.json');
const getParts = () => require('./static/parts.json');
const getQualities = () => require('./static/qualities.json');
const getSets = () => require('./static/sets.json');
const getKillstreaks = () => require('./static/killstreaks.json');
const getWears = () => require('./static/wears.json');

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
exports.getCore = () => require('./src/index');
