function verifyProof(proof, node, root, concat) {
  let testRoot = node;
  proof.forEach(x => {
    if (x.left) {
      testRoot = concat(x.data, testRoot);
    } else {
      testRoot = concat(testRoot, x.data);
    }
  });
  return testRoot === root;
}

module.exports = verifyProof;
