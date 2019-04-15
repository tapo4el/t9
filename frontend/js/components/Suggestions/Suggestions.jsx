import React from 'react';

import './styles.css';

class Suggestions extends React.PureComponent {
    render() {
        const { suggestions, addWord } = this.props;
        return (
            <ul className="suggestions">
                {suggestions.map(val => <li onClick={() => addWord(val)}>{val}</li>)}
            </ul>
        )
    }
}

export default Suggestions;
