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

class ReCompDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="re_comp_detail">
                <div className="r_titele text_cen">公司详情</div>
                <div className="re_comp_compname">
                    <div></div>
                    <div></div>
                </div>
                <div className="re_comp_tips">招聘信息</div>
                <div>
                    
                </div>
                <div className="re_comp_tips">公司信息</div>
                <div></div>
                <div className="re_comp_tips">联系方式</div>
                <div></div>
            </div>
        )
    }
}

export default ReCompDetail;