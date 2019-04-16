import { getInputText, getMaskNumbers, getSuggestions } from './index';

describe('Selectors', () => {
    const state = {
        inputText: ['This', 'is'],
        predictionMask: [{symbol: 'a', number: '2'}, {symbol: 'd', number: '3'}],
        suggestions: ['test'],
    };

    it ('getMaskNumbers should work correctly', () => {
        expect(getMaskNumbers(state)).toEqual('23');
    });

    it ('getInputText should work correctly', () => {
        expect(getInputText(state)).toEqual('This is ad');
    });

    it ('getSuggestions should work correctly', () => {
        expect(getSuggestions(state)).toEqual(['test']);
    });
});
