const SHA256 = require('crypto-js/sha256');

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
  return COLORS.find(color => SHA256(color).toString() === hash.toString());
}

module.exports = findColor;
