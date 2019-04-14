import React from 'react';
import './styles.css';

class Input extends React.PureComponent {
   render() {
       const { text } = this.props;
       return (
           <input type="text" className="textInput" value={text} readOnly/>
       )
   }
}

export default Input;
