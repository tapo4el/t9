import { createSelector } from 'reselect';

const appState = state => state;

export const getInputText = createSelector(
    appState,
    ({inputText, predictionMask}) => `${inputText.join(' ')} ${predictionMask.join('')}`
);
