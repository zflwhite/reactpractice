import React from "react";
import "../assets/css/confirm.css"
class Confirm extends React.Component{
    render(){
        return(
            <div>
                <header className="mui-bar mui-bar-nav" id="header">
			<a className="btn" href="javascript:history.go(-1)">
	            <i className="iconfont icon-fanhui"></i>
	        </a>
	        <div className="top-sch-box top-sch-boxtwo flex-col">
	                      确认订单
	        </div>
	    </header>
	    
	    
	    <div className="warp warptwo clearfloat">
	    	<div className="confirm clearfloat">
	    		<div className="add clearfloat box-s">
	    			<a href="address.html">
		    			<div className="left clearfloat fl">
		    				<i className="iconfont icon-dizhi1"></i>
		    			</div>
		    			<div className="middle clearfloat fl">
		    				<p className="tit">
		    					收货人：小王&nbsp;&nbsp;&nbsp;&nbsp;1580888888
		    				</p>
		    				<p className="fu-tit over2">
		    					收货地址：湖南省长沙市高新区拓基城市广场金座A2002
		    				</p>
		    			</div>
		    			<div className="left clearfloat fr">
		    				<i className="iconfont icon-jiantou1"></i>
		    			</div>
	    			</a>
	    		</div>
	    		<div className="lie clearfloat">
					<a href="detail.html">
						<div className="tu clearfloat fl">
							<img src="/src/assets/images/xj.jpg"/>
						</div>
					</a>
					<div className="right clearfloat fl">
						<a href="detail.html">
							<p className="tit over">单反相机，彰显你的风格</p>
							<p className="fu-tit">颜色：蓝色  内存：120G</p>
						</a>
						<div className="xia clearfloat">
							<a href="detail.html">
								<p className="jifen fl over">100000积分</p>
							</a>
							<span className="fr db">×1</span>
						</div>
					</div>
				</div>
				<div className="gmshu clearfloat box-s fl">
					<div className="gcontent clearfloat">
						<p className="fl">购买数量</p>
			     		<div className="you clearfloat fr">
			     			<ul>
			     				<li><img src="/src/assets/images/jian.jpg"/></li>
			     				<li>1</li>
			     				<li><img src="/src/assets/images/jia.jpg"/></li>
			     			</ul>
			     		</div>
					</div>		     		
		     	</div>
		     	<div className="gmshu gmshutwo clearfloat box-s fl">
					<div className="gcontent clearfloat">
						<p className="fl">配送方式</p>
			     		<div className="you clearfloat fr">
			     			<span>快递 免邮</span>
			     			<i className="iconfont icon-jiantou1"></i>
			     		</div>
					</div>		     		
		     	</div>
		     	<div className="gmshu gmshutwo clearfloat box-s fl">
					<div className="gcontent clearfloat">
						<p className="fl">发票信息</p>
			     		<div className="you clearfloat fr">
			     			<div className="xuan clearfloat">
			     				<div className="radiotwo" > 
								    <label>
								        <input type="radio" name="fapiao" value=""/>
								        <div className="option"></div>
								        <span className="opt-text">需要发票</span>
								    </label>
								</div>
			     			</div>
		    				<div className="xuan clearfloat">
			     				<div className="radiotwo" > 
								    <label>
								        <input type="radio" name="fapiao" value=""/>
								        <div className="option"></div>
								        <span className="opt-text">不需要发票</span>
								    </label>
								</div>
			     			</div>
			     		</div>
					</div>		     		
		     	</div>
		     	<div className="gmshu gmshuthree clearfloat box-s fl">
					<div className="gcontent clearfloat">
						<p className="fl">买家留言</p>
			     		<div className="you clearfloat fl">
			     			<input type="text" name="" id="" value="" className="text" placeholder="选填 对本次交易需求给商家留言" />
			     		</div>
					</div>		     		
		     	</div>
		     	<div className="gmshu clearfloat box-s fl">
					<p className="fr">共1件商品   合计<samp>100000积分</samp></p>	     		
		     	</div>
		     	
	    	</div>
	    </div>	    
	    
		
	    <div className="settlement clearfloat">
	    	<div className="zuo clearfloat fl box-s">
	    		共<span>1</span>件  总积分：<span>100000</span>
	    	</div>
	    	<a href="zhifu.html" className="fl db">
	    		提交订单
	    	</a>
	    </div>
	    
	    <footer className="page-footer fixed-footer" id="footer">
			<ul>
				<li>
					<a href="index.html">
						<i className="iconfont icon-shouye"></i>
						<p>首页</p>
					</a>
				</li>
				<li>
					<a href="cation.html">
						<i className="iconfont icon-icon04"></i>
						<p>分类</p>
					</a>
				</li>
				<li className="active">
					<a href="shopcar.html">
						<i className="iconfont icon-gouwuche"></i>
						<p>购物车</p>
					</a>
				</li>
				<li>
					<a href="center.html">
						<i className="iconfont icon-yonghuming"></i>
						<p>我的</p>
					</a>
				</li>
			</ul>
		</footer>
            </div>
        );
    }
}
export default Confirm;