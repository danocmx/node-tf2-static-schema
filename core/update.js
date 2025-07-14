const fs = require('fs');
const path = require('path');

const fetchAll = require('./fetch-all');

function sortSchema(data) {
    const { itemsGame, paintKits, itemNames } = data;

    delete data.itemsGame;
    delete data.paintKits;
    delete data.itemNames;

    /**
     * Sorted into objects that will be saved as JSON files.
     */
    return {
        ...data,
        'items-game': itemsGame,
        'paint-kits': paintKits,
        'item-names': itemNames,
    };
}

async function update(apiKey, { dir, log = console.log } = {}) {
    if (!apiKey) throw new Error('API key is missing.');

    const staticDirExists = await fs.existsSync(dir);
    if (!staticDirExists) await fs.promises.mkdir(dir);

    const response = await fetchAll(apiKey);
    const data = sortSchema(response);

    log('Fetched the data.');

    const files = Object.keys(data);
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileData = data[file];

        fs.promises.writeFile(
            path.join(dir, `./${file}.json`),
            JSON.stringify(fileData, null, 4),
            {
                encoding: 'utf-8',
            }
        );

        log(`Wrote ${file}.json!`);
    }
}

module.exports = update;
