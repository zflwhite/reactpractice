import React from "react";
import "../assets/css/address.css";

class Address extends React.Component{
    render(){
        return(
            <div id="address">
                <header className="mui-bar mui-bar-nav" id="header">
                    <a className="btn" href="javascript:history.go(-1)">
                        <i className="iconfont icon-fanhui"></i>
                    </a>
                    <p>管理收货地址</p>
                </header>
                <ul className="address-list">
                    <li>
                        <p>收货人：小王&nbsp;&nbsp;182********</p>
                        <p className="order-add1">收货地址：湖南省长沙市高新区拓基城市广场金座A2002</p>
                        <hr />
                        <div className="address-cz">
                            <label className="am-radio am-warning">
                                <input type="radio" name="radio3" value="" data-am-ucheck checked/> 设为默认
                            </label>
                            <a href="" className="editButton"><img src="/src/assets/images/bj.png" width="18" />&nbsp;编辑</a>
                            <a href="" className="deleteButton">删除</a>
                        </div>
                    </li>
                    <li className="curr">
                        <p>收货人：小王&nbsp;&nbsp;182********</p>
                        <p className="order-add1">收货地址：湖南省长沙市高新区拓基城市广场金座A2002</p>
                        <hr />
                        <div className="address-cz">
                            <label className="am-radio am-warning">
                                <input type="radio" name="radio3" value="" data-am-ucheck/> 设为默认
                            </label>
                            <a href="" className="editButton"><img src="/src/assets/images/bj.png" width="18" />&nbsp;编辑</a>
                            <a href="" className="deleteButton">删除</a>
                        </div>
                    </li>
                    <li>
                        <p>收货人：小王&nbsp;&nbsp;182********</p>
                        <p className="order-add1">收货地址：湖南省长沙市高新区拓基城市广场金座A2002</p>
                        <hr />
                        <div className="address-cz">
                            <label className="am-radio am-warning">
                                <input type="radio" name="radio3" value="" data-am-ucheck/> 设为默认
                            </label>
                            <a href="" className="editButton"><img src="/src/assets/images/bj.png" width="18" />&nbsp;编辑</a>
                            <a href="" className="deleteButton">删除</a>
                        </div>
                    </li>
                    <li>
                        <p>收货人：小王&nbsp;&nbsp;182********</p>
                        <p className="order-add1">收货地址：湖南省长沙市高新区拓基城市广场金座A2002</p>
                        <hr />
                        <div className="address-cz">
                            <label className="am-radio am-warning">
                                <input type="radio" name="radio3" value="" data-am-ucheck/> 设为默认
                            </label>
                            <a href="" className="editButton"><img src="/src/assets/images/bj.png" width="18" />&nbsp;编辑</a>
                            <a href="" className="deleteButton">删除</a>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Address;