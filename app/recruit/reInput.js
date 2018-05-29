import React, { Component } from 'react';
import '../css/weui.css';
import '../css/recruit.css';

class ReInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    render() {
      return (
         <input type="text" className="re_input" placeholder={this.props.phText}/>
      )
    }
  }
  
  export default ReInput;