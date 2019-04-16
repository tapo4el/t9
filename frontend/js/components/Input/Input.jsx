import React from 'react';
import { string } from 'prop-types';

import './styles.css';

class Input extends React.PureComponent {
    static propTypes = {
        inputText: string.isRequired,
    };

   render() {
       const { inputText } = this.props;
       return (
           <input type="text" className="textInput" value={inputText} readOnly/>
       );
   }
};

export default Input;
