import React from 'react';
import './styles.css';

class Button extends React.PureComponent {
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
