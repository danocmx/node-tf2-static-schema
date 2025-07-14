const fetchAll = require('./fetch-all');
const update = require('./update');

const { getItemsGame } = require('./items-game');
const { getPaintKits } = require('./paint-kits');
const { getSchemaItems } = require('./schema-items');
const { getSchemaOverview } = require('./schema-overview');

module.exports = {
    fetchAll,
    update,
    getItemsGame,
    getPaintKits,
    getSchemaItems,
    getSchemaOverview,
};
