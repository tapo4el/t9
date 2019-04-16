import React from 'react';
import { func, string } from 'prop-types';

import './styles.css';

class Button extends React.PureComponent {
    static propTypes = {
        text: string,
        value: string.isRequired,
        onClickHandler: func.isRequired,
    };

    render () {
        const { text, value, onClickHandler } = this.props;
        return (
            <button className="button" onClick={() => onClickHandler(value)}>
                {value}
                <div>{text}</div>
            </button>
        );
    }
}

export default Button;
