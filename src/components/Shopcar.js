import React from "react";
import "../assets/css/shopcar.css";
class Shopcar extends React.Component{
    render(){
        return(
            <div>
                <header className="mui-bar mui-bar-nav" id="header">
			<a className="btn" href="javascript:history.go(-1)">
	            <i className="iconfont icon-fanhui"></i>
	        </a>
	        <h4>购物车</h4>
	    </header>
	    
	    <div className="warp warptwo clearfloat">
	    	<div className="shopcar clearfloat">
	    		<div className="list clearfloat fl">
	    			<div className="xuan clearfloat fl">
	    				<div className="radio" > 
						    <label>
						        <input type="checkbox" name="sex" value="" />
						    </label>
						</div>
	    			</div>
	    			<a href="javascript:void(0)">
		    			<div className="tu clearfloat fl">
		    				<span></span>
		    				<img src="/src/assets/images/xj.jpg"/>
		    			</div>
		    			<div className="right clearfloat fl">
		    				<p className="tit over">单反相机，彰显你的风格</p>
		    				<p className="fu-tit over">颜色：蓝色  内存：120G</p>
		    				<p className="jifen over">100000积分</p>
		    				<div className="bottom clearfloat">
		    					<div className="zuo clearfloat fl">
		    						<ul>
		    							<li><img src="/src/assets/images/jian.jpg"/></li>
		    							<li>1</li>
		    							<li><img src="/src/assets/images/jia.jpg"/></li>
		    						</ul>
		    					</div>
		    					<i className="iconfont icon-lajixiang fr"></i>
		    				</div>
		    			</div>
	    			</a>
	    		</div>
	    		<div className="list clearfloat fl">
	    			<div className="xuan clearfloat fl">
	    				<div className="radio" > 
						    <label>
						        <input type="checkbox" name="sex" value="" />
						    </label>
						</div>
	    			</div>
	    			<a href="javascript:void(0)">
		    			<div className="tu clearfloat fl">
		    				<span></span>
		    				<img src="/src/assets/images/xj.jpg"/>
		    			</div>
		    			<div className="right clearfloat fl">
		    				<p className="tit over">单反相机，彰显你的风格</p>
		    				<p className="fu-tit over">颜色：蓝色  内存：120G</p>
		    				<p className="jifen over">100000积分</p>
		    				<div className="bottom clearfloat">
		    					<div className="zuo clearfloat fl">
		    						<ul>
		    							<li><img src="/src/assets/images/jian.jpg"/></li>
		    							<li>1</li>
		    							<li><img src="/src/assets/images/jia.jpg"/></li>
		    						</ul>
		    					</div>
		    					<i className="iconfont icon-lajixiang fr"></i>
		    				</div>
		    			</div>
	    			</a>
	    		</div>
	    		<div className="list clearfloat fl">
	    			<div className="xuan clearfloat fl">
	    				<div className="radio" > 
						    <label>
						        <input type="checkbox" name="sex" value="" />
						    </label>
						</div>
	    			</div>
	    			<a href="javascript:void(0)">
		    			<div className="tu clearfloat fl">
		    				<span></span>
		    				<img src="/src/assets/images/xj.jpg"/>
		    			</div>
		    			<div className="right clearfloat fl">
		    				<p className="tit over">单反相机，彰显你的风格</p>
		    				<p className="fu-tit over">颜色：蓝色  内存：120G</p>
		    				<p className="jifen over">100000积分</p>
		    				<div className="bottom clearfloat">
		    					<div className="zuo clearfloat fl">
		    						<ul>
		    							<li><img src="/src/assets/images/jian.jpg"/></li>
		    							<li>1</li>
		    							<li><img src="/src/assets/images/jia.jpg"/></li>
		    						</ul>
		    					</div>
		    					<i className="iconfont icon-lajixiang fr"></i>
		    				</div>
		    			</div>
	    			</a>
	    		</div>
	    		<div className="list clearfloat fl">
	    			<div className="xuan clearfloat fl">
	    				<div className="radio" > 
						    <label>
						        <input type="checkbox" name="sex" value="" />
						    </label>
						</div>
	    			</div>
	    			<a href="javascript:void(0)">
		    			<div className="tu clearfloat fl">
		    				<span></span>
		    				<img src="/src/assets/images/xj.jpg"/>
		    			</div>
		    			<div className="right clearfloat fl">
		    				<p className="tit over">单反相机，彰显你的风格</p>
		    				<p className="fu-tit over">颜色：蓝色  内存：120G</p>
		    				<p className="jifen over">100000积分</p>
		    				<div className="bottom clearfloat">
		    					<div className="zuo clearfloat fl">
		    						<ul>
		    							<li><img src="/src/assets/images/jian.jpg"/></li>
		    							<li>1</li>
		    							<li><img src="/src/assets/images/jia.jpg"/></li>
		    						</ul>
		    					</div>
		    					<i className="iconfont icon-lajixiang fr"></i>
		    				</div>
		    			</div>
	    			</a>
	    		</div>
	    	</div>
	    </div>
	    

	    <div className="settlement clearfloat">
	    	<div className="zuo clearfloat fl box-s">
	    		合计：<span></span>
	    	</div>
	    	<a href="confirm.html" className="fl db">
	    		立即结算
	    	</a>
	    </div>
	    
            </div>
        );
    }
}
export default Shopcar;