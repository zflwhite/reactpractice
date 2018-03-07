import React from "react";
import "../assets/css/index.css"
import {connect} from "react-redux";
import {Link} from 'react-router';
class Home extends React.Component{
  constructor(){
	super();
	this.state={
		listData:[]
	}
	
  }
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
	this.getData();
  }
  render(){
    return (
      <div>
          <header className="mui-bar mui-bar-nav" id="header">
	        <h4>积分商城</h4>
	      </header>
		  <div id="main" className="clearfloat warp">			
		    <div className="mui-content">

				<div className="banner swiper-container">
		            <div className="swiper-wrapper">
		                <div className="swiper-slide"><a href="javascript:void(0)"><img className="swiper-lazy" src="./src/assets/images/banner4.jpg" alt=""/></a></div>
		                <div className="swiper-slide"><a href="javascript:void(0)"><img className="swiper-lazy" src="./src/assets/images/banner1.jpg" alt=""/></a></div>
		                <div className="swiper-slide"><a href="javascript:void(0)"><img className="swiper-lazy" src="./src/assets/images/banner3.jpg" alt=""/></a></div>
		            </div>
		        </div>

		        <div className="cation clearfloat box-s">
		        	<ul>
		        		<li>
		        			<a href="#">
		        				<img src="./src/assets/images/ico5.png"/>
		        				<p>新品专区</p>
		        			</a>
		        		</li>
		        		<li>
		        			<a href="#">
		        				<img src="./src/assets/images/ico2.png"/>
		        				<p>送礼首选</p>
		        			</a>
		        		</li>
		        		<li>
		        			<a href="#">
		        				<img src="./src/assets/images/ico3.png"/>
		        				<p>积分获取</p>
		        			</a>
		        		</li>
		        		<li>
		        			<a href="#">
		        				<img src="./src/assets/images/ico4.png"/>
		        				<p>私人定制</p>
		        			</a>
		        		</li>
		        	</ul>
		        </div>
		        
		        <div className="onnew clearfloat">
		        	<div className="boutit clearfloat">
		        		<span></span>
		        		<samp>新品专区</samp>
		        	</div>
		        	<div className="content clearfloat">
		        		<div className="top clearfloat">
		        			<div className="list clearfloat fl box-s">
		        				<a href="detail.html">
			        				<div className="zuo clearfloat fl box-s">
			        					<p className="tit text">单反相机，彰显你的风格</p>
				        				<p><span>积分:</span><span className="over  red">1000000</span></p>
			        				</div>
			        				<div className="tu clearfloat fr">
			        					<span></span>
			        					<img src="./src/assets/images/xj.jpg"/>
			        				</div>
		        				</a>
		        			</div>
		        			<div className="list clearfloat fl box-s">
		        				<a href="detail.html">
			        				<div className="zuo clearfloat fl box-s">
			        					<p className="tit text">单反相机，彰显你的风格</p>
				        				<p><span>积分:</span><span className="over  red">1000000</span></p>
			        				</div>
			        				<div className="tu clearfloat fr">
			        					<span></span>
			        					<img src="./src/assets/images/xj.jpg"/>
			        				</div>
		        				</a>
		        			</div>
		        		</div>
		        		<div className="bottom clearfloat">
		        			<div className="list clearfloat fl">
		        				<a href="detail.html">
		        					
			        				<div className="tu clearfloat fr">
			        					<span></span>
			        					<img src="./src/assets/images/dd.jpg"/>
			        				</div>
			        				<div className="shang clearfloat fl box-s">
			        					<p className="tit over">实现梦想的哆啦A梦</p>
				        				<p><span>积分:</span><span className="over  red">1000</span></p>
			        				</div>
		        				</a>
		        			</div>
		        			<div className="list clearfloat fl">
		        				<a href="detail.html">
		        					
			        				<div className="tu clearfloat fr">
			        					<span></span>
			        					<img src="./src/assets/images/dd.jpg"/>
			        				</div>
			        				<div className="shang clearfloat fl box-s">
			        					<p className="tit over">实现梦想的哆啦A梦</p>
				        				<p><span>积分:</span><span className="over  red">1000</span></p>
			        				</div>
		        				</a>
		        			</div>
		        			<div className="list clearfloat fl">
		        				<a href="detail.html">
		        					
			        				<div className="tu clearfloat fr">
			        					<span></span>
			        					<img src="./src/assets/images/dd.jpg"/>
			        				</div>
			        				<div className="shang clearfloat fl box-s">
			        					<p className="tit over">实现梦想的哆啦A梦</p>
				        				<p><span>积分:</span><span className="over  red">1000</span></p>
			        				</div>
		        				</a>
		        			</div>
		        		</div>
		        	</div>
		        </div>
		        
		        
		        {
					this.state.listData.map((item,index)=>{
						return (
							<div className="theme clearfloat" key={index}>
							<div className="boutit clearfloat">
								<span></span>
								<samp>{item.title}</samp>
							</div>
							<div className="content clearfloat">
								{
									item.s.map((item,index)=>{
										return(
											<Link to="/Detail" className="list clearfloat fl" key={item.id}>
						
													<div className="tu clearfloat fr">
														<span></span>
														<img src={item.img} />
													</div>
													<div className="shang clearfloat fl box-s">
														<p className="tit over">{item.proname}</p>
														<p><span>积分:</span><span className="over  red">{item.cost}</span></p>
													</div>
											
											</Link>
										);
									})
								}
								
		
							</div>				        	
						</div>
						);
					  })
				}
	        </div>
		</div>
      </div>
    );
  }
  getData(){
    //pubsub.publish('消息名',数据)
    this.props.showLoading();
    let url=`/src/data/index.data`;
    fetch(url).then(
			
      res => res.json()
    ).then(
      data => {
        setTimeout(()=>{
					this.props.hideLoading();  
		  this.setState({listData:data});
		  //console.log(data);
        },0);
      }
    )
  }
  
}
const mapStateToProps=(state,ownProps)=>{
  return {

  }
};

//所有需要递交的action请求
const mapDispatchToProps=(dispatch,ownProps)=>{
  return {
    showLoading:()=>{
      dispatch({type:'SHOW_LOADING'});
    },
    hideLoading:()=>{
      dispatch({type:'HIDE_LOADING'});
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);