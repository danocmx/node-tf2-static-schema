# TF2 Static Schema
This package keeps TF2 schema files up to date in the temp folder.
I've created this package due to the other option being running everything locally for your app which seems illogical due to lack of updates TF2 receives.

This is a work in progress, bear in mind the API can change.

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
