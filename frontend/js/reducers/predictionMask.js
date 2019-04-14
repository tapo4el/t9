import { handleActions } from 'redux-actions';

import { addNumber, removeNumber } from '../actions';

const initialState = [];

export default handleActions({
    [addNumber]: (state, { payload }) => state.concat(payload),
    [removeNumber]: (state) => state.slice(0,-1),
}, initialState);
