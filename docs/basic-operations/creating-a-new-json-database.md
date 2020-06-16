# Creating a new JSON database or initialize an exisiting JSON file

## Create a new database

Make sure you have Jsoning installed and Node.js version greater than `v12`. 

::: tip
Install Jsoning with NPM:
```
npm i jsoning
```
Install Jsoning with Yarn:
```
yarn add jsoning
```
:::

::: tip
To find your Node version, run `node -v` in the terminal.
:::

Create a new database by creating a new instance of the Jsoning class:
```js
const Jsoning = require("jsoning");
var database = new Jsoning("json/file/name.json");
```

::: warning
Make sure the name of the database file ends with the extension `.json` or Jsoning will throw an error.
:::

## Initialize an existing JSON file

To initialize an existing JSON file as your database, 
```js
const Jsoning = require("jsoning");
var database = new Jsoning("existing/file/name.json");
```

This is exactly the same as creating to a new JSON database file. If the JSON file doesn't exist, Jsoning creates that file.
