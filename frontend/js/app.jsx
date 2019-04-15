import React from 'react';
import { hot } from 'react-hot-loader/index';
import 'reset-css';
import './style.css'

import Keypad from './components/Keypad';
import Input from './components/Input';
import T9List from './components/T9List';

class App extends React.Component {
    render() {
        return (
            <div className="t9-app">
                <Input/>
                <div className="row">
                    <T9List/>
                    <Keypad/>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
