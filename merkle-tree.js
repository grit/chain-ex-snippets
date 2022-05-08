class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }
  getRoot() {
    function merkelize(leaves, concat) {
      if (leaves.length === 1) {
        return leaves[0];
      } else {
        let newLeaves = [];
        for (let i = 0; i < leaves.length; i += 2) {
          if (leaves[i + 1]) {
            newLeaves.push(concat(leaves[i], leaves[i + 1]));
          } else {
            newLeaves.push(leaves[i]);
          }
        }
        return merkelize(newLeaves, concat);
      }
    }
    return merkelize(this.leaves, this.concat);
  }
}

module.exports = MerkleTree;
