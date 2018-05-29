import React, { Component } from 'react';
import '../css/weui.css';
import '../css/recruit.css';
import Msg from '../component/Msg.js';
import Rpath from '../Rpath.js';
import HTTPED from '../address';
import StrInput from '../component/StrInput.js';



class RecruitSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pagestatus:'recruit',
      
    }
  }
  

  render() {

    return (
      <div>
        {
          this.state.Pagestatus == 'recruit'?
          <div className="re_body">
            <div className="r_titele text_cen">招聘</div>
          <ul className="re_conditions mar0">
            <li>
              <span>职位名称</span>
              <input type="text" placeholder="请选择"/>
            </li>
            <li>
              <span>薪资待遇</span>
              <input type="text" placeholder="请选择"/>
            </li>
            <li>
              <span>工作地点</span>
              <input type="text" placeholder="请选择"/>
            </li>
          </ul>
        </div>:undefined
        }
      </div>
    )
  }
}

export default RecruitSearch;