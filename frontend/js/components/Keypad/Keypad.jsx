import React from 'react';

import Button from '../Button';
import './styles.css';

class Keypad extends React.PureComponent {
    render () {
        const { addSymbol, removeSymbol } = this.props;
        return (
            <div className="keypad">
                <div className="buttons">
                    <Button value={1}/>
                    <Button onClickHandler={addSymbol} value={2} text={'d,e,f'}/>
                    <Button onClickHandler={addSymbol} value={3} text={'g,h,i'}/>
                </div>
                <div className="buttons">
                    <Button onClickHandler={addSymbol} value={4} text={'a,b,c'}/>
                    <Button onClickHandler={addSymbol} value={5} text={'d,e,f'}/>
                    <Button onClickHandler={addSymbol} value={6} text={'g,h,i'}/>
                </div>
                <div className="buttons">
                    <Button onClickHandler={addSymbol} value={7} text={'a,b,c'}/>
                    <Button onClickHandler={addSymbol} value={8} text={'d,e,f'}/>
                    <Button onClickHandler={addSymbol} value={9} text={'g,h,i'}/>
                </div>
                <div className="buttons">
                    <Button onClickHandler={addSymbol} value={0} text={'space'}/>
                    <Button onClickHandler={removeSymbol} value={'Remove'}/>
                </div>
            </div>
        );
    }
}

export default Keypad;
