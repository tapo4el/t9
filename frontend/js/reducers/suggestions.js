import { handleActions } from 'redux-actions';

import { addWord, suggestionsReceived } from '../actions';

const initialState = [];

export default handleActions({
    [suggestionsReceived]: (state, { payload }) => payload,
    [addWord]: () => initialState,
}, initialState);
