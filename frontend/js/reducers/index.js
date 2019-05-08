import { combineReducers } from 'redux';

import predictionMask from './predictionMask';
import inputText from './inputText';
import suggestions from './suggestions';

export default combineReducers({
    predictionMask,
    inputText,
    suggestions,
});
