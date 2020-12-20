/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {};
    this.endOfWord = "$";
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node  = this.root
    for(let w of word){
        node[w] =node[w] || {}
        node  = node[w]
    }
    node[this.endOfWord] =this.endOfWord
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node  =this.root
    for(let w of word){
        if(!node[w]) return false
        node = node[w]
    }
    return node[this.endOfWord] == this.endOfWord
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node  =this.root
    for(let w of prefix){
        if(!node[w]) return false
        node = node[w]
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */