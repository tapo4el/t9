import { throttle, put, select } from 'redux-saga/effects';

import { addSymbol, removeSymbol, suggestionsReceived } from '../actions';
import { getMaskNumbers } from '../selectors';

function* handleSuggestion() {
    const mask = yield select(getMaskNumbers);

    const payload = yield fetch(`/suggestions?mask=${mask}`)
        .then(response => response.json());

    yield put({...suggestionsReceived(), payload});
}

export default function* watchSuggestions() {
    yield throttle(500, [addSymbol().type, removeSymbol().type], handleSuggestion)
}
