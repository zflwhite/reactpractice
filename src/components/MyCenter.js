import React from "react";
import "../assets/css/center.css";

class MyCenter extends React.Component{
    render(){
        return(
            <div>
                <header id="header">
        <div className="topbar">
            <a href="javascript:history.back();" className="back_btn"><i className="iconfont">ş</i></a>
            <h1 className="page_title">会员中心</h1>
        </div>
    </header>

    <div className="vip-header">
        <a href="">
            <dl>
                <dt>
                    <img src="/src/assets/images/user.png" />
                </dt>
                <dd>
                    <h4>hjl416148489<span>普通会员</span></h4>
                    <p><span>积分：<i>30</i></span>&nbsp;&nbsp;<span>红包：<i>0</i></span></p>
                </dd>
            </dl>
        </a>
        <ul>
            <li><a href=""><span>1</span><p>待付款</p> </a></li>
            <li><a href=""><span>0</span><p>待收货</p> </a></li>
            <li><a href=""><span>0</span><p>待评价</p> </a></li>
        </ul>
    </div>

    <div className="vip-club border_top_bottom">
        <div className="vip-club-title border_bottom">
            <span><i className="iconfont"></i>会员俱乐部</span>
            <a href="">每日签到领积分<i className="iconfont"></i></a>
        </div>
        <ul>
            <li><a href=""><i className="iconfont"></i><p>我的订单</p> </a></li>
            <li><a href=""><i className="iconfont"></i><p>我的秒杀</p> </a></li>
            <li><a href=""><i className="iconfont"></i><p>我的众筹</p> </a></li>
            <li><a href=""><i className="iconfont"></i><p>我的预约</p> </a></li>
        </ul>
    </div>
    <div className="vip-club border_top_bottom vip-account">
        <div className="vip-club-title border_bottom">
            <span><i className="iconfont"></i>我的账户</span>
            <a href="./index.html">积分兑换商品<i className="iconfont"></i></a>
        </div>
        <ul>
            <li><a href=""><i className="color_f44623">0</i><p>账户余额</p> </a></li>
            <li><a href=""><i className="color_f4a425">30</i><p>我的积分</p> </a></li>
            <li><a href=""><i className="color_45a1de">0</i><p>我的礼券</p> </a></li>
            <li><a href=""><i className="color_1dccaa">1</i><p>宝贝收藏</p> </a></li>
        </ul>
    </div>
    <div className="vip-list-icon border_top_bottom">
        <ul>
            <li className="border_bottom"> 
                <a href="" className="border_right"><i className="iconfont icon-sousuo"></i><em>维修查询</em></a>
                <a href=""><i className="iconfont"></i><em>报修退换</em></a> 
            </li>
            <li className="border_bottom">
                <a href="" className="border_right"><i className="iconfont" ></i><em>物流查询</em></a> 
                <a href="./address.html"><i className="iconfont icon-dizhi1"></i><em>收货地址</em></a> 
            </li>
            <li className="border_bottom"> 
                <a href="" className="border_right"><i className="iconfont"></i><em>评价晒单</em></a>
                <a href=""><i className="iconfont" ></i><em>我的投诉</em></a>
             </li>
            <li> 
                <a href="" className="border_right"><i className="iconfont"></i><em>我的咨询</em></a> 
                <a href=""><i className="iconfont"></i><em>二手订单</em></a>
            </li>
        </ul>
    </div>
    </div>
        );
    }
}
export default MyCenter;