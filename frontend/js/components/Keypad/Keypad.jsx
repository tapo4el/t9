import React from 'react';

import Button from '../Button';
import './styles.css';

class Keypad extends React.PureComponent {
    render () {
        const { addNumber, removeNumber } = this.props;
        return (
            <div className="keypad">
                <div className="buttons">
                    <Button value={1}/>
                    <Button addNumber={addNumber} value={2} text={'d,e,f'}/>
                    <Button addNumber={addNumber} value={3} text={'g,h,i'}/>
                </div>
                <div className="buttons">
                    <Button addNumber={addNumber} value={4} text={'a,b,c'}/>
                    <Button addNumber={addNumber} value={5} text={'d,e,f'}/>
                    <Button addNumber={addNumber} value={6} text={'g,h,i'}/>
                </div>
                <div className="buttons">
                    <Button addNumber={addNumber} value={7} text={'a,b,c'}/>
                    <Button addNumber={addNumber} value={8} text={'d,e,f'}/>
                    <Button addNumber={addNumber} value={9} text={'g,h,i'}/>
                </div>
                <div className="buttons">
                    <Button addNumber={addNumber} value={0} text={'space'}/>
                    <Button addNumber={removeNumber} value={'Remove'}/>
                </div>
            </div>
        );
    }
}

export default Keypad;
