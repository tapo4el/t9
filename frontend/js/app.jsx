import React from 'react';
import { hot } from 'react-hot-loader/index';
import 'reset-css';

import './style.css';

import Keypad from './components/Keypad';
import Input from './components/Input';
import Suggestions from './components/Suggestions';

class App extends React.PureComponent {
    render() {
        return (
            <div className="t9-app">
                <Input />
                <div className="row">
                    <Suggestions />
                    <Keypad />
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
