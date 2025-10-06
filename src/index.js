const _ = require('lodash');
const minimist = require('minimist');
const axios = require('axios');

console.log('Hello from Dependabot demo!');
console.log('lodash version:', _.VERSION);
console.log('args:', minimist(process.argv.slice(2)));
