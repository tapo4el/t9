import React from 'react';
import './styles.css';

class Button extends React.PureComponent {
    render () {
        const { text, value, addNumber } = this.props;
        return (
            <button className="button" onClick={() => addNumber(value)}>
                {value}
                <div>{text}</div>
            </button>
        );
    }
}

export default Button;
