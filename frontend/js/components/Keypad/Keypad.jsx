import React from 'react';
import { func } from 'prop-types';

import Button from '../Button';
import './styles.css';

class Keypad extends React.PureComponent {
    static propTypes = {
        addSymbol: func.isRequired,
        removeSymbol: func.isRequired,
    };

    render() {
        const { addSymbol, removeSymbol } = this.props;
        return (
            <div className="keypad">
                <div className="buttons">
                    <Button onClickHandler={() => {}} value="1" />
                    <Button onClickHandler={addSymbol} value="2" text="abc" />
                    <Button onClickHandler={addSymbol} value="3" text="def" />
                </div>
                <div className="buttons">
                    <Button onClickHandler={addSymbol} value="4" text="ghi" />
                    <Button onClickHandler={addSymbol} value="5" text="jkl" />
                    <Button onClickHandler={addSymbol} value="6" text="mno" />
                </div>
                <div className="buttons">
                    <Button onClickHandler={addSymbol} value="7" text="pqrs" />
                    <Button onClickHandler={addSymbol} value="8" text="tuv" />
                    <Button onClickHandler={addSymbol} value="9" text="wxyz" />
                </div>
                <div className="buttons">
                    <Button onClickHandler={removeSymbol} value="Remove" />
                </div>
            </div>
        );
    }
}

export default Keypad;
