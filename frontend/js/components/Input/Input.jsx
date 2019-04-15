import React from 'react';
import './styles.css';

class Input extends React.PureComponent {
   render() {
       const { inputText } = this.props;
       return (
           <input type="text" className="textInput" value={inputText} readOnly/>
       );
   }
};

export default Input;
