import Trie from './trie';

describe('Trie', () => {
    let trie;

    beforeEach(() => {
        trie = new Trie();
    });

    it ('should initialize correctly', () => {
        expect(trie).toMatchSnapshot();
    });

    it ('insert work correctly and to be case insensitive', () => {
        trie.insert('ab');
        trie.insert('DE');
        expect(trie).toMatchSnapshot();
    });

    it ('getSuggestions work correctly with empty input string', () => {
        trie.insert('aaa');
        trie.insert('ddd');
        expect(trie.getSuggestions('')).toEqual([]);
    });

    it ('getSuggestions work correctly', () => {
        trie.insert('aaa');
        trie.insert('ddd');
        expect(trie.getSuggestions('2')).toEqual(['aaa']);
        expect(trie.getSuggestions('4')).toEqual([]);
    });
});
