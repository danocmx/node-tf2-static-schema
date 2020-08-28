# TF2 Static Schema
This package keeps TF2 schema files up to date in the temp folder.

This is a work in progress, bear in mind the API can change.

## Reason I've created this
- Unrealibity of steam servers
- Lack of TF2 updates making it illogical to update locally every X hour
- Loading just what you want into your app!

## Instalation
If you're only using `schema.static`, install like:
```
npm install --no-optional tf2-static-schema
```
If you want to use core of the package (updating static files or fetching data yourself) do: 
```
npm install tf2-static-schema
```

## Usage
- All parts are required through node resolver:

`require('tf2-static-schema/static/*')`, * can be:

`attributes`,
`effects`,
`item-names`,
`items`,
`items-game`,
`levels`,
`lookups`,
`origins`,
`paint-kits`,
`parts`,
`qualities`,
`sets`,

`require('tf2-static-schema/core')` provides:

`fetchAll` - fetches all schemas
`update` - updates static files
`getItemsGame` - fetches game metadata
`getPaintKits` - fetchs paint kits
`getSchemaItems` - fetches the items with API Key
`getSchemaOverview` - fetches the overview with API Key
