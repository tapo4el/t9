import { combineReducers } from 'redux';

import predictionMask from './predictionMask';
import inputText from './inputText';

export default combineReducers({
    predictionMask,
    inputText
});
