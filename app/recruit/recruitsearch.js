import React, { Component } from 'react';
import '../css/weui.css';
import '../css/recruit.css';
import Msg from '../component/Msg.js';
import Rpath from '../Rpath.js';
import HTTPED from '../address';
import StrInput from '../component/StrInput.js';
import BackT from '../advantagenew/backT.js';
import { getDataList, getCheckbind, Getwxtoken, getUserInfo, postProv, postData, postYJData, getDataDetail } from '../DataInterface.js';

class RecruitSearch extends Component {
  constructor(props) {
    super(props);
    this.hiringChoose =this.hiringChoose.bind(this);
    this.backtosx =this.backtosx.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.selectChange=this.selectChange.bind(this);
    this.citys= this.citys.bind(this);
    this.backfun = this.backfun.bind(this);
    this.cityOnchange = this.cityOnchange.bind(this);
    this.renderList=this.renderList.bind(this);
    this.state = {
      Pagestatus:'recruitsearch',
      hiringName:"",
      salary:'',
      cityLists:[],
      ChangeCarrList:[]
    }
  }
  componentWillMount(){
    this.citys();
    // this.getRecentCarrList();
  }
  backtosx() {
    this.setState({
      Pagestatus:'recruitsearch'
    })
  }
  hiringChoose() {
   
    this.setState({
      Pagestatus:'hiringChoose'
    })
  }
  handleClick(e) {
    let hiringName = e.target.getAttribute('name')
    this.setState({
      Pagestatus:'recruitsearch',
      hiringName:hiringName,
    })
  }
  selectChange(e) {
    this.setState({
      salary:e.target.value
    })
  }
  citys() {
    let url = 'api/cities/?Name=';
    getDataList(url, [], this.backfun)
  }
  backfun(data){
    console.log(data);
    this.setState({
      cityLists:data,
    })
  }
  cityOnchange(e) {
    let v = e.target.value;
    let chv='';
    let Ob={};
    let arr = []
    this.state.ChangeCarrList.splice(0,this.state.ChangeCarrList.length);
    if (v!=''){
      for (let i=0;i<this.state.cityLists.length;i++)
      {
        chv=this.state.cityLists[i].cityname
        if (chv.indexOf(v)!=-1){
          Ob={carr:this.state.cityLists[i].cityid, carrName:this.state.cityLists[i].cityname};
          arr.push(Ob);
        }
      }
    }
    this.setState({
      ChangeCarrList:arr
    })
  }
  renderList() {
    console.log(this.state.ChangeCarrList);
    let data = this.state.ChangeCarrList;
    return data.map(datas =>{
      console.log(datas);
      return <div key={datas.carr}>{datas.carrName}</div>
    })
  }
  render() {
    let logoUrl =  HTTPED + 'images/';
    return (
      <div>
        {
          this.state.Pagestatus == 'recruitsearch'?
          <div className="re_body">
              <BackT tit="招聘筛选" backonClick={this.props.backto}></BackT>
              <div className="titleback"></div>
            <div className="r_titele text_cen">招聘筛选</div>
            <ul className="re_conditions mar0">
              <li>
                <span>职位名称</span>
                {
                  this.state.hiringName=="" ?
                  <input type="text" placeholder="请选择" onClick={this.hiringChoose} readonly="readonly"  />:
                  <input type="text"  onClick={this.hiringChoose} value={this.state.hiringName} readonly="readonly"/>
                }
              </li>
              <li>
                <span>薪资待遇</span>
                <select name="" id="" onChange={this.selectChange }>
                  <option value="0">请选择</option>
                  <option value="1">2000-3000</option>
                  <option value="2">3000-5000</option>
                  <option value="3">5000-8000</option>
                  <option value="4">8000-12000</option>
                  <option value="5">12000以上</option>
                </select>
              </li>
              <li>
                <span>工作地点</span>
                <input type="text" placeholder="请选择" onChange={this.cityOnchange}/>
              </li>
            </ul>
            <div>
                <a href="" className="weui-btn re_search">查找</a>
            </div>
            {
              this.state.ChangeCarrList.length !=0 ?
              this.renderList():undefined
            }
        </div>:undefined
        }
        {
          this.state.Pagestatus=="hiringChoose"?
          <div className="hiringCH">
            <BackT tit="职位选择" backonClick={this.backtosx}></BackT>
            <div className="r_titele text_cen">职位选择</div>
            <ul className="r_hiring_lists">
              <li onClick={this.handleClick}>
                <div><img src={logoUrl+'dz.png'} alt="单证"/></div>
                <p>单证</p>
                <span name="单证"></span>
              </li>
              <li onClick={this.handleClick}>
                <div><img src={logoUrl+'cz.png'} alt="操作"/></div>
                <p>操作</p>
                <span name="操作"></span>
              </li>
              <li onClick={this.handleClick}>
                <div><img src={logoUrl+'kf.png'} alt="客服"/></div>
                <p>客服</p>
                <span name="客服"></span>
              </li>
              <li onClick={this.handleClick}>
                <div><img src={logoUrl+'sw.png'} alt="商务"/></div>
                <p>商务</p>
                <span name="商务"></span>
              </li>
              <li onClick={this.handleClick}>
                <div><img src={logoUrl+'ye.png'} alt="业务"/></div>
                <p>业务</p>
                <span name="业务"></span>
              </li>
              <li onClick={this.handleClick}>
                <div><img src={logoUrl+'cw.png'} alt="财务"/></div>
                <p>财务</p>
                <span name="财务"></span>
              </li>
              <li onClick={this.handleClick}>
                <div><img src={logoUrl+'cn.png'} alt="出纳"/></div>
                <p>出纳</p>
                <span name="出纳"></span>
              </li>
              <li onClick={this.handleClick}>
                <div><img src={logoUrl+'dd.png'} alt="调度"/></div>
                <p>调度</p>
                <span name="调度"></span>
              </li>
              <li onClick={this.handleClick}>
                <div><img src={logoUrl+'bgy.png'} alt="报关员"/></div>
                <p>报关员</p>
                <span name="报关员"></span>
              </li>
            </ul>
          </div>:undefined
        }
        
      </div>
    )
  }
}

export default RecruitSearch;