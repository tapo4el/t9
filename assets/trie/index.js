const fs = require('fs');
const path = require('path');

const trie = require('./trie');

fs.readFile(path.join(__dirname, 'subset10000.txt'), function(err, buf) {
    buf.toString().split('\n').forEach(w => trie.insert(w));
});

module.exports = trie;
