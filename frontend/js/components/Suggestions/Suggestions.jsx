import React from 'react';
import { func, arrayOf, string } from 'prop-types';

import './styles.css';

class Suggestions extends React.PureComponent {
    static propTypes = {
        suggestions: arrayOf(string),
        addWord: func.isRequired,
    };

    render() {
        const { suggestions, addWord } = this.props;
        return (
            <ul className="suggestions">
                {suggestions.map(val => <li key={val} onClick={() => addWord(val)}>{val}</li>)}
            </ul>
        )
    }
}

export default Suggestions;
