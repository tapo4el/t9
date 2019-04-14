import React from 'react';
import { hot } from 'react-hot-loader/index';

class Hello extends React.Component {
    render() {
        return (
            <div>
                Hello user!
            </div>
        );
    }
}

export default hot(module)(Hello);
