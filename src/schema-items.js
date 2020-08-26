const axios = require('axios');

exports.getSchemaItems = function getSchemaItems(apiKey, { next = 0, itemNames = {}, items = [] } = {}) {    
    return axios({
        method: 'GET',
        url: 'https://api.steampowered.com/IEconItems_440/GetSchemaItems/v0001',
        params: {
            key: apiKey,
            start: next,
            language: 'English',
        }
    })
        .then(({ data: { result } }) => {
            if (result.status !== 1) {
                return Promise.reject(
                    new Error(
                        `Status: ${result.status}, Message: ${result.message}`
                    )
                );
            }

            /**
             * Full includes the full data.
             */
            items.push(...result.items);
            /**
             * Includes shorter one only for names.
             */
            Object.assign(itemNames, parseItems(result));

            if (result.next) {
                return exports.getSchemaItems(apiKey, { next: result.next, itemNames, items});
            }
            
            return {
                itemNames,
                items,
            }
        })
}

function parseItems({ items }) {
    const itemNames = {};

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        const itemName = item.item_name;
        const defindex = item.defindex;
        
        itemNames[defindex] = itemName;
        itemNames[itemName] = defindex;
    }

    return itemNames;
}
