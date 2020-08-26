# TF2 Schema Up2Date
This package keeps TF2 schema files up to date in the temp folder.

## Instalation
If you're only using `schema.static`, install like:
```
npm install --no-optional tf2-schema-up2date
```
If you're either doing `schema.getUpdate` temp files or `schema.getNet` just do:
```
npm install tf2-schema-up2date
```

## Usage

`schema.static` includes:

`schema.static.getAttributes`,
`schema.static.getEffects`,
`schema.static.getItemNames`,
`schema.static.getItems`,
`schema.static.getItemsGame`,
`schema.static.getLevels`,
`schema.static.getLookups`,
`schema.static.getOrigins`,
`schema.static.getPaintKits`,
`schema.static.getParts`,
`schema.static.getQualities`,
`schema.static.getSets`,

Which you use to lazy load the data so you don't actually have all of them.

`schema.getNet`:
Lazy loads the net modules with Axios and VDF:

`fetchAll` - fetches all schemas
`getItemsGame` - fetches game metadata
`getPaintKits` - fetchs paint kits
`getSchemaItems` - fetches the items with API Key
`getSchemaOverview` - fetches the overview with API Key
