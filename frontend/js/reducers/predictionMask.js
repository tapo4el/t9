import { handleActions } from 'redux-actions';

import { addSymbol, removeSymbol, addWord } from '../actions';

const initialState = [];

export default handleActions({
    [addSymbol]: (state, { payload }) => state.concat(payload),
    [removeSymbol]: (state) => state.slice(0,-1),
    [addWord]: () => initialState,
}, initialState);
