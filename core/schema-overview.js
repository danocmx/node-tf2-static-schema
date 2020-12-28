const axios = require('axios');

exports.getSchemaOverview = function getSchemaOverview(apiKey) {
	return axios({
		method: 'GET',
		url:
			'https://api.steampowered.com/IEconItems_440/GetSchemaOverview/v0001',
		params: { key: apiKey, language: 'English' },
	}).then(({ data: { result } }) => {
		if (result.status !== 1) {
			return Promise.reject(
				new Error(
					`Status: ${result.status}, Message: ${result.message}`
				)
			);
		}

		const qualities = parseQuality(result);
		const effects = parseParticles(result);
		const origins = parseOrigins(result);
		const attributes = parseAttributes(result);
		const sets = parseItemSets(result);
		const levels = parseItemLevels(result);
		const parts = parseKillEaterScoreTypes(result);
		const lookups = parseStringLookups(result);

		return {
			qualities,
			effects,
			origins,
			attributes,
			sets,
			levels,
			parts,
			lookups,
		};
	});
}

function parseQuality({ qualities, qualityNames }) {
	const quality = {};

	const qualityNamesKeys = Object.keys(qualityNames);
	for (let i = 0; i < qualityNamesKeys.length; i++) {
		const qualityIdName = qualityNamesKeys[i];

		const qualityName = qualityNames[qualityIdName];
		const qualityId = qualities[qualityIdName];

		quality[qualityName] = qualityId;
		quality[qualityId] = qualityName;
	}

	return quality;
}

function parseParticles(result) {
	const effects = {};

	const particles = result.attribute_controlled_attached_particles;
	for (let i = 0; i < particles.length; i++) {
		const particle = particles[i];

		const particleId = particle.id;
		const particleName = particle.name;

		effects[particleId] = particleName;

		if (effects[particleName]) {
			/**
			 * Always use the first variant of team effects.
			 * 
			 * eg. Showstopper, Arcane Assistance, Reindoonicorn Rancher
			 */
			continue;
		}

		effects[particleName] = particleId;
	}

	return effects;
}

function parseOrigins({ originNames }) {
	const origins = {};

	for (let i = 0; i < originNames.length; i++) {
		const origin = originNames[i];

		const originName = origin.name;
		const originId = origin.origin;

		origins[originId] = originName;
		origins[originName] = originId;
	}

	return origins;
}

function parseAttributes({ attributes }) {
	const attrs = {};

	for (let i = 0; i < attributes.length; i++) {
		const attribute = attributes[i];

		const attributeId = attribute.defindex;
		delete attribute.defindex;

		attrs[attributeId] = attribute;
	}

	return attrs;
}

function parseItemSets(result) {
	const sets = {};

	const itemSets = result.item_sets;
	for (let i = 0; i < itemSets.length; i++) {
		const set = itemSets[i];

		const setName = set.name;
		const setItems = set.items;

		sets[setName] = setItems;
	}

	return sets;
}

function parseItemLevels(result) {
	const levels = {};

    const itemLevels = result.item_levels;

    for (let i = 0; i < itemLevels.length; i++) {
        const itemLevel = itemLevels[i];

        const levelName = itemLevel.name;
        const levelDescriptions = itemLevel.levels;

        levels[levelName] = levelDescriptions;
    }
   
	return levels;
}

function parseKillEaterScoreTypes(result) {
	const parts = {};

	const killEeaterScoreTypes = result.kill_eater_score_types;
	for (let i = 0; i < killEeaterScoreTypes.length; i++) {
		const part = killEeaterScoreTypes[i];

		const partType = part.type;
		delete part.type;
		parts[partType] = part;
	}

	return parts;
}

function parseStringLookups(result) {
	const lookups = {};

	const stringLookups = result.string_lookups;
	for (let i = 0; i < stringLookups.length; i++) {
		const lookup = stringLookups[i];

		const name = lookup.table_name;
		const strings = lookup.strings;

		lookups[name] = strings;
	}

	return lookups;
}
