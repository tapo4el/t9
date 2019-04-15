import { createAction } from 'redux-actions';

export const addSymbol = createAction('ADD_SYMBOL');

export const removeSymbol = createAction('REMOVE_SYMBOL');

export const addWord = createAction('ADD_WORD');

export const suggestionsReceived = createAction('SUGGESTIONS_RECEIVED');
