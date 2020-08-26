// Fetch new, save to file via github actions
const fs = require('fs-extra');
const path = require('path');

const { fetchAll } = require('../src');

async function fetchAndSort(apiKey) {
	const response = await fetchAll(apiKey);

	const { itemsGame, paintKits, itemNames } = response;

	delete response.itemsGame;
	delete response.paintKits;
	delete response.itemNames;

	/**
	 * Sorted into objects that will be saved as JSON files.
	 */
	return {
		...response,
		'items-game': itemsGame,
		'paint-kits': paintKits,
		'item-names': itemNames,
	};
}

function getDir() {
	return path.join(__dirname, '../', './temp');
}

module.exports = async function update(apiKey) {
	if (!apiKey) throw new Error('API key is missing.');

	const dir = getDir();
	const tempDirExists = await fs.exists(dir);
	if (!tempDirExists) await fs.mkdir(dir);

	const response = await fetchAndSort(apiKey);

	console.log('Fetched the data.');

	const responseFiles = Object.keys(response);
	for (let i = 0; i < responseFiles.length; i++) {
		const file = responseFiles[i];
		const data = response[file];

		await fs.writeJSON(path.join(dir, `./${file}.json`), data, {
			encoding: 'utf-8',
		});
		console.log(`Wrote ${file}.json!`);
	}
};

function getAPIKey() {
	return process.argv[2];
}

if (require.main === module) {
	update(getAPIKey()).catch(console.error);
}
