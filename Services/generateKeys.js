const crypto = require('crypto');

const access = crypto.randomBytes(64).toString('hex');
const refresh = crypto.randomBytes(64).toString('hex');

console.log({access, refresh});