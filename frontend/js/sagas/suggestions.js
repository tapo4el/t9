import {
    throttle, put, select, call,
} from 'redux-saga/effects';

import { addSymbol, removeSymbol, suggestionsReceived } from '../actions';
import { getMaskNumbers } from '../selectors';

export function* handleSuggestion() {
    const mask = yield select(getMaskNumbers);
    const response = yield call(fetch, `/suggestions?mask=${mask}`);
    const payload = yield call([response, response.json]);

    yield put(suggestionsReceived(payload));
}

export default function* watchSuggestions() {
    yield throttle(500, [addSymbol().type, removeSymbol().type], handleSuggestion);
}
