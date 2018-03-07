import React from "react";
import "../assets/css/detail.css";
class Detail extends React.Component{
	componentDidMount(){
		$(function () {
			var banner = new Swiper('.banner',{
				autoplay: 5000,
				pagination : '.swiper-pagination',
				paginationClickable: true,
				lazyLoading : true,
				loop:true
			});
		
			 $('a.slide-menu').on('click', function(e){
				var wh = $('div.wrapper').height();
				$('div.slide-mask').css('height', wh).show();
				$('aside.slide-wrapper').css('height', wh).addClass('moved');
			});
			
			$('div.slide-mask').on('click', function(){
				$('div.slide-mask').hide();
				$('aside.slide-wrapper').removeClass('moved');
			});
			
		
		});
		
	  }
	render(){
		return(
			<div>
				<header className="mui-bar mui-bar-nav" id="header">
			<a className="btn" href="javascript:history.go(-1)">
	            <i className="iconfont icon-fanhui"></i>
	        </a>
	        <h4>商品详情</h4>
	    </header>
		
		
		<div className="warp warptwo clearfloat">
			<div className="detail clearfloat">
				
				<div className="banner swiper-container">
		            <div className="swiper-wrapper">
		                <div className="swiper-slide"><a href="javascript:void(0)"><img className="swiper-lazy" data-src="/src/assets/images/xj3.jpg" alt=""/></a></div>
		                <div className="swiper-slide"><a href="javascript:void(0)"><img className="swiper-lazy" data-src="/src/assets/images/xj3.jpg" alt=""/></a></div>
		                <div className="swiper-slide"><a href="javascript:void(0)"><img className="swiper-lazy" data-src="/src/assets/images/xj3.jpg" alt=""/></a></div>
		                <div className="swiper-slide"><a href="javascript:void(0)"><img className="swiper-lazy" data-src="/src/assets/images/xj3.jpg" alt=""/></a></div>
		            </div>
		            <div className="swiper-pagination"></div>
		        </div>
				
				<div className="top clearfloat box-s">
					<div className="shang clearfloat">
						<div className="zuo clearfloat fl over2 box-s">
							单反相机，彰显你的风格
						</div>
						<div className="you clearfloat fr">
							<i className="iconfont icon-fenxiang"></i>
							<p>分享</p>
						</div>
					</div>
					<div className="xia clearfloat">
						<p className="jifen fl box-s"><samp>100000</samp>积分</p>
						<span className="fr">销量8件</span>
					</div>
				</div>
				<div className="middle clearfloat box-s">
					<a href="#">
						<span className="fl">商品详情</span>
						<i className="iconfont icon-jiantou1 fr"></i>
					</a>
				</div>
				<div className="middle clearfloat box-s">
					<a href="#">
						<span className="fl">商品评价</span>
						<i className="iconfont icon-jiantou1 fr"></i>
					</a>
				</div>
			</div>
		</div>
		
		
		<div className="footerone clearfloat">
			<div className="left clearfloat fl">
				<ul>
					<li >
						<div>
							<a href="#">
								<i className="iconfont icon-shangcheng"></i>
								<p>商城</p>
							</a>
						</div>
					</li>
					<li >
						<div>
							<a href="#">
								<i className="iconfont icon-kefu1"></i>
								<p>客服</p>
							</a>
						</div>
					</li>				
				</ul>
			</div>
			<div className="right clearfloat fl">
				<span className="btn fl">加入购物车</span>
				<a href="confirm.html" className="btn btnone fl">立即购买</a>
			</div>
		</div>
		
		<div className="am-share">
		    <div className="am-share-footer">
		        <button className="share_btn"><img src="/src/assets/images/chahao.png" /></button>
		    </div>
		    <div className="am-share-sns box-s">
		        <div className="sdetail clearfloat">
		            <div className="top clearfloat">
		                <div className="tu clearfloat fl">
		                    <span></span>
		                    <img src="/src/assets/images/xj2.jpg" />
		                </div>
		                <div className="you clearfloat fl">
		                    <p className="tit">单反相机</p>
		                    <span>100000积分</span>
		                </div>
		            </div>
		            <div className="middle clearfloat">
		                <p>颜色分类</p>
		                <div className="xia clearfloat">
		                    <ul>
		                        <li className="ra3 cur">蓝色</li>
		                        <li className="ra3">白色</li>
		                    </ul>
		                </div>
		            </div>
		            <div className="middle clearfloat">
		                <p>机身内存</p>
		                <div className="xia clearfloat">
		                    <ul>
		                        <li className="ra3 cur">120G</li>
		                        <li className="ra3">60G</li>
		                    </ul>
		                </div>
		            </div>
		            <div className="bottom clearfloat">
		                <p className="fl">购买数量</p>
		                <div className="you clearfloat fr">
		                    <ul>
		                        <li id="down"><img src="/src/assets/images/jian.jpg" /></li>
		                        <li id="count">1</li>
		                        <li><img src="/src/assets/images/jia.jpg" /></li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		    <a href="shopcar.html" className="shop-btn db">确定</a>
		</div>
		
			</div>
		);
	}
}
export default Detail;