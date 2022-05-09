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
  getProof(index) {
    let merkleProof = [];
    const calculateProof = (leaves, index) => {
      if (leaves.length === 1) {
        return merkleProof;
      }

      let pairing;
      let left;
      if (index % 2 === 0) {
        pairing = leaves[index + 1];
        left = false;
      } else {
        pairing = leaves[index - 1];
        left = true;
      }
      if (pairing) {
        merkleProof.push({ data: pairing, left });
      }

      let newLeaves = [];
      let arr = [];
      for (let i = 0; i < leaves.length; i++) {
        if (arr.length < 2) {
          arr.push(leaves[i]);
          if (arr.length === 2) {
            newLeaves.push(this.concat(arr[0], arr[1]));
            arr = [];
          }
        }
      }
      if (arr.length) {
        newLeaves.push(arr[0]);
      }
      return calculateProof(newLeaves, Math.floor(index / 2));
    };
    return calculateProof(this.leaves, index);
  }
}

module.exports = MerkleTree;
