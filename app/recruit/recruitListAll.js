import React, { Component } from 'react';
import '../css/weui.css';
import '../css/recruit.css';
import Msg from '../component/Msg.js';
import Rpath from '../Rpath.js';
import HTTPED from '../address';
import StrInput from '../component/StrInput.js';
import BackTitle from '../component/BackTitle.js';
import Title from '../component/Title.js'
import RecruitSearch from './recruitsearch.js'


class RecruitListAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value:this.props.thevalue,
    }
  }

  render() {
    console.log(this.state.value.datetime);
    return (
      <div className="re_lists_all clearfix" onClick={this.props.toDetail}>
        <div className="re_compIcon"></div>
        <ul className="re_lists_ul">
            <li className="clearfix">
                <div>{this.state.value.compName}</div>
                <span>{this.state.value.salaryName}</span>
            </li>
            <li className="clearfix">
                <div>{this.state.value.hiringName}</div>
                <span>{this.state.value.hiringName}</span>
            </li>
            <li className="clearfix">
                <div>{this.state.value.requirementsinfo}</div>
                <span>{this.state.value.datetime}</span>
            </li>
        </ul>
      </div>
    )
  }
}

export default RecruitListAll;