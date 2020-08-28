exports.requireStatic = (file) => require(`./static/${file}.json`);
exports.requireCore = () => require('./core');