import Block from './Block';

class Blockchain {
  constructor() {
    this.chain = [new Block()];
  }

  addBlock(block) {
    const latestBlock = this.chain[this.chain.length - 1];
    block.previousHash = latestBlock.toHash();
    this.chain.push(block);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      let curr = this.chain[i].previousHash.toString();
      let prev = this.chain[i - 1].toHash().toString();
      if (curr !== prev) {
        return false;
      }
    }
    return true;
  }
}

export default Blockchain;
