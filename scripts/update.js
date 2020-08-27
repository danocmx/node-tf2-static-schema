const path = require('path');

const { update } = require('../src');

function getAPIKey() {
	return process.argv[2];
}

function getDir() {
	return path.join(__dirname, '../', './temp');
}

if (require.main === module) {
	update(
		getAPIKey(),
		getDir(),
	)
		.catch(console.error);
}
