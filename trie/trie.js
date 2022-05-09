const TrieNode = require('./TrieNode');

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }
  insert(word) {
    let letters = word.split('');
    let refNode = this.root;
    letters.forEach((letter, i, arr) => {
      let node = new TrieNode(letter);
      if (!refNode.children[letter]) {
        refNode.children[letter] = node;
        refNode = node;
      } else {
        refNode = refNode.children[letter];
      }
      if (i === arr.length - 1) {
        refNode.isWord = true;
      }
    });
  }
  contains(word) {
    let letters = word.split('');
    let pointer = this.root;
    for (let i = 0; i < letters.length; i++) {
      if (pointer.children[letters[i]]) {
        pointer = pointer.children[letters[i]];
      } else {
        return false;
      }
    }
    if (pointer.isWord) {
      return true;
    }
    return false;
  }
}

module.exports = Trie;
