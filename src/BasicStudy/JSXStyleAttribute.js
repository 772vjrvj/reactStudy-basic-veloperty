import React, { Component } from "react";
import '../css/JSXStyleAttribute.css'

class JSXStyleAttribute extends Component {
  
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    };
    return  (
      <div>
        <div style={style}>
          안녕하세요!
        </div>
        <div className='JSXStyleAttribute'>안녕하세요!</div>
      </div>
    );
    
  }
}

export default JSXStyleAttribute;
