import { createSelector } from 'reselect';

const appState = state => state;

const getMaskSymbols = createSelector(
    appState,
    ({ predictionMask }) => predictionMask.map(i => i.symbol).join('')
);

export const getMaskNumbers = createSelector(
    appState,
    ({ predictionMask }) => predictionMask.map(i => i.number).join('')
);

export const getInputText = createSelector(
    appState,
    getMaskSymbols,
    ({ inputText }, maskSymbols) => `${inputText.join(' ')} ${maskSymbols}`
);

export const getSuggestions = createSelector(
    appState,
    ({ suggestions }) => suggestions
);
