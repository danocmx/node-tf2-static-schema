const fetchAll = require('./fetch-all');

const { getItemsGame } = require('./items-game');
const { getPaintKits } = require('./paint-kits');
const { getSchemaItems } = require('./schema-items');
const { getSchemaOverview } = require('./schema-overview');

module.exports = {
    fetchAll,
    getItemsGame,
    getPaintKits,
    getSchemaItems,
    getSchemaOverview
}
