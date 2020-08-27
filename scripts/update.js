const path = require('path');

const { update } = require('../core');

function getAPIKey() {
	return process.argv[2];
}

function getDir() {
	return path.join(__dirname, '../', './temp');
}

if (require.main === module) {
	update(
		getAPIKey(),
		{ dir: getDir(), log: console.log },
	)
		.catch(console.error);
}
