class Tree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    if (!this.root) {
      this.root = node;
    } else {
      this.addChild(this.root, node);
    }
  }

  addChild(parent, child) {
    if (child.data < parent.data) {
      if (!parent.left) {
        parent.left = child;
      } else {
        this.addChild(parent.left, child);
      }
    } else if (child.data > parent.data) {
      if (!parent.right) {
        parent.right = child;
      } else {
        this.addChild(parent.right, child);
      }
    }
  }

  hasNode(number) {
    let root = this.root;
    while (root) {
      if (root.data === number) {
        return true;
      } else if (number < root.data) {
        root = root.left;
      } else if (number > root.data) {
        root = root.right;
      }
    }
    return false;
  }
}

module.exports = Tree;
