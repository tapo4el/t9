import { put, select, call } from 'redux-saga/effects';
import { fetch } from 'whatwg-fetch';

import { getMaskNumbers } from '../selectors';
import { handleSuggestion } from './suggestions';
import {suggestionsReceived} from "../actions";

describe('handleSuggestion', () => {
    const generator = handleSuggestion();

    it ('should get mask', () => {
        const value = generator.next().value;

        expect(value).toEqual(select(getMaskNumbers));
    });

    it ('should get suggestions', () => {
        const value = generator.next('23').value;

        expect(value).toEqual(call(fetch, `/suggestions?mask=23`));
    });

    it ('should parse json', () => {
        const response = { json: ()=> ['test'] };
        const result = generator.next(response).value;

        expect(result).toEqual(call([response, response.json]));
    });

    it ('should emit "SUGGESTIONS_RECEIVED"', () => {
        const data = ['test', 'data'];
        const result = generator.next(data).value;

        expect(result).toEqual(put(suggestionsReceived(data)));
    });
});
