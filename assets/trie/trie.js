const keyMap = {
    a: 2, b: 2, c: 2,
    d: 3, e: 3, f: 3,
    g: 4, h: 4, i: 4,
    j: 5, k: 5, l: 5,
    m: 6, n: 6, o: 6,
    p: 7, q: 7, r: 7, s: 7,
    t: 8, u: 8, v: 8,
    w: 9, x: 9, y: 9, z: 9
};

class Node {
    constructor() {
        this.children = {};
        this.words = [];
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(word) {
        let node = this.root;
        const normalized = word.toLowerCase();
        for(let i= 0; i < word.length; i++){
            const key = keyMap[normalized[i]];
            if (!node.children.hasOwnProperty(key)) {
                node.children[key] = new Node();
            }
            node = node.children[key];
        }
        node.words.push(normalized);
    }
    getSuggestions(str) {
        let node = this.root;
        let hasMatches = false;
        for (let i = 0; i < str.length; i++) {
            let key = str[i];
            if (node.children.hasOwnProperty(key)){
                node = node.children[key];
                hasMatches = true;
            } else {
                hasMatches = false;
                break;
            }
        }

        return hasMatches ? this.fillSuggestions(node): [];
    }
    fillSuggestions(node) {
        let result = node.words;
        let queue = [];

        for (let child in node.children) queue.push(node.children[child]);

        while (result.length < 10 && queue.length > 0) {
            node = queue.shift();
            for (let child in node.children) queue.push(node.children[child]);
            result = result.concat(node.words);
        }
        return result;
    }
}

module.exports = new Trie();
