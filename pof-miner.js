const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  mempool.push(transaction);
}

function mine() {
  const block = {
    id: blocks.length,
    nonce: 0,
  };
  const transactions = [];
  while (mempool.length > 0 && transactions.length < MAX_TRANSACTIONS) {
    let transaction = mempool.pop();
    transactions.push(transaction);
  }
  block.transactions = transactions;
  let hash = SHA256(JSON.stringify(block));
  while (BigInt(`0x${hash}`) > TARGET_DIFFICULTY) {
    block.nonce++;
    hash = SHA256(JSON.stringify(block));
  }
  block.hash = hash;
  blocks.push(block);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
