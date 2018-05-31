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
import { getDataList, getCheckbind, Getwxtoken, getUserInfo, postProv, postData, postYJData, getDataDetail } from '../DataInterface.js';

class RecruitListAll extends Component {
  constructor(props) {
    super(props);
    this.bkFun = this.bkFun.bind(this);
    this.state = {
        value:this.props.thevalue,
        BinduserName: this.props.BinduserName, //当前用户
        wxtoken: this.props.wxtoken,
        logo :''
    }
  }
  componentWillMount() {
    let userName=this.state.BinduserName;
    let wxtoken=this.state.wxtoken;
    let comp = this.state.value.comp;
    let url = 'api/comps/'+comp +'?userName='+userName+ '&wxtoken='+wxtoken;
    getDataDetail(url, this.bkFun);
  }
  bkFun (data) {
    // console.log(data);
    if (!data.err) {
      let comp = data.comp;
      let logo = comp.logo;
      if (logo != undefined) {
        let logoUrl =  HTTPED +logo;
        this.setState({
          logo:logoUrl
        })
      }else {
        let logoUrl =  HTTPED + 'images/nlogo.png';
        this.setState({
          logo:logoUrl
        })
      }
    }
  }
  render() {
    let s = this.state.value.datetime
    let x = s.substring(0,s.indexOf('T'))
    return (
      <div className="re_lists_all clearfix" onClick={this.props.toDetail}>
        <div className="re_compIcon"><img src={this.state.logo} alt="logo"/></div>
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
                <span>{x}</span>
            </li>
        </ul>
      </div>
    )
  }
}

export default RecruitListAll;