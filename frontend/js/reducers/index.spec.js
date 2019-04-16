import predictionMask from './predictionMask';
import inputText from './inputText';
import suggestions from './suggestions';

import { addSymbol, removeSymbol, addWord, suggestionsReceived } from '../actions';

describe('Reducers', () => {
    const maskSymbol = { symbol: 'a', number: '2' };
    const suggestionsList = ['Hello', 'world'];

    it ('predictionMask should return initial state', () => {
        expect(predictionMask(undefined, {})).toEqual([]);
    });
    it ('predictionMask should add symbol', () => {
        expect(predictionMask([], addSymbol(maskSymbol))).toEqual([maskSymbol]);
    });
    it ('predictionMask should remove symbol', () => {
        expect(predictionMask([maskSymbol], removeSymbol())).toEqual([]);
    });
    it ('predictionMask should reset to initial state', () => {
        expect(predictionMask([maskSymbol], addWord())).toEqual([]);
    });
    it ('inputText should return initial state', () => {
        expect(inputText(undefined, {})).toEqual([]);
    });
    it ('inputText should add word', () => {
        expect(inputText([], addWord('Hello'))).toEqual(['Hello']);
    });
    it ('suggestions should return initial state', () => {
        expect(suggestions(undefined, {})).toEqual([]);
    });
    it ('suggestions should fill suggestion list', () => {
        expect(suggestions([], suggestionsReceived(suggestionsList))).toEqual(suggestionsList);
    });
    it ('suggestions should reset to initial state', () => {
        expect(suggestions(suggestionsList, addWord())).toEqual([]);
    });
});
