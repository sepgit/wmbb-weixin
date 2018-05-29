import React, { Component } from 'react';
import '../css/weui.css';
import '../css/recruit.css';
import Msg from '../component/Msg.js';
import Rpath from '../Rpath.js';
import HTTPED from '../address';
import StrInput from '../component/StrInput.js';
import BackTitle from '../component/BackTitle.js';
import Title from '../component/Title.js';
import RecruitSearch from './recruitsearch.js';
import RecruitListAll from './recruitListAll.js';
import ReCompDetail from './recruitCompDetail.js'
import { getDataList, getCheckbind, Getwxtoken, getUserInfo, postProv, postData, postYJData, getDataDetail } from '../DataInterface.js';
class Recruit extends Component {
  constructor(props) {
    super(props);
    this.toSearch = this.toSearch.bind(this);
    this.getBuserName = this.getBuserName.bind(this);
    this.backfun = this.backfun.bind(this);
    this.backReLists = this.backReLists.bind(this);//招聘列表页面的数据
    // this.toCompDetail = this.toCompDetail.bind(this);//去公司详情页面
    this.state = {
      user: 0,//用户id
      comp: 0,//公司id
      BinduserName: '', //当前用户
      wxtoken: '',
      Pagestatus: 'recruit', // recruit 招聘列表页  recruitSearch 招聘搜索  compDetail 公司详情页面
      recruitmentLists: [],
    }
  }
  componentWillMount() {
    let wxtoken = Getwxtoken();  //获取微信ID
    this.setState({
      wxtoken: wxtoken,
    });
    getCheckbind(wxtoken, this.getBuserName);
  }
  getBuserName(value) {
    if (!value.err) {
      let userJson = value.user;
      this.setState({
        BinduserName: userJson.userAcco,
        user: userJson.user,
        comp: userJson.comp,
      });
    }
    let BinduserName = this.state.BinduserName;
    let wxtoken = this.state.wxtoken;
    let user = this.state.user;
    let url = 'api/recruitment/?hiring=&salary=&city=&rowCount=5&pageIndex=1';
    getDataList(url, [], this.backfun)
  }

  backfun(data) {
    console.log(data);
    this.setState({
      recruitmentLists: data,
    })
  }

  toSearch() {
    this.setState({
      Pagestatus: 'recruitSearch',
    })
  }
  backReLists() {
    let value = this.state.recruitmentLists;
    let _this = this;
    return value.map(s => {
      return <RecruitListAll key={s.recruitment} thevalue={s} toDetail={_this.toCompDetail.bind(s, s.recruitment, s.comp)}></RecruitListAll>
      // 传递 招聘id 和 公司id
    });
  }
  toCompDetail(reid, comp) {
    console.log(reid, comp);

  }
  compDetail() {
    return <ReCompDetail></ReCompDetail>
  }
  render() {
    return (
      <div>
        {
          this.state.Pagestatus == 'recruit' ?
            <div>
              <div className="recruit_tit">
                <div className="r_titele text_cen">招聘</div>
                <span className="recruit_tit_search weui-icon-search" onClick={this.toSearch}></span>
              </div>
              <div className="paging"></div>
            </div>
            : undefined
        }
        {
          this.state.Pagestatus == 'recruitSearch' ?
            <RecruitSearch></RecruitSearch> : undefined
        }
        {
          this.backReLists()
        }
        {
          this.state.Pagestatus == 'recruitSearch' ?
          <RecruitSearch></RecruitSearch> : undefined
        }

      </div>

    )
  }
}

export default Recruit;