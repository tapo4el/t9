import React from 'react';

import './styles.css';

class T9List extends React.PureComponent {
    render() {
        const { predictions, addWord } = this.props;
        return (
            <ul className="t9List">
                {predictions.map(val => <li onClick={() => addWord(val)}>{val}</li>)}
            </ul>
        )
    }
}

export default T9List;
