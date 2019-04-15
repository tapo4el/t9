import { handleActions } from 'redux-actions';

import { addWord } from '../actions';

const initialState = [];

export default handleActions({
    [addWord]: (state, { payload }) => state.concat(payload),
}, initialState);
