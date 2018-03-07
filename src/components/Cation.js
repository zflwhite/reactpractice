import React from "react";
import "../assets/css/cation.css";
import {Link} from "react-router";
import {connect} from "react-redux";
class Cation extends React.Component{
	constructor(){
		super();
		this.state={
			listData:[]
		}
		
	}
  render(){
    return (
        <div>
            <header className="mui-bar mui-bar-nav" id="header">
			<a className="btn" href="javascript:history.go(-1)">
	            <i className="iconfont icon-fanhui"></i>
	        </a>
	        <h4>商品分类</h4>
	        <a className="btn" href="#">
	            <i className="iconfont icon-erweima"></i>
	        </a>
	    </header>
	    <div className="warp clearfloat">
		    <div className="cations clearfloat">
		    	{
					this.state.listData.map((item,index)=>{
						return(
							<div key={item.id} className="list clearfloat fl" >
								<Link to={{pathname:'/prolist/',query:{dataid:item.id}}}>
									<p className="tit over box-s">{item.type}</p>
									<div className="tu">
										<img src={item.img}/>
									</div>
								</Link>
							</div>
						)
					})
				}
		    </div>
	    </div>	    		    
        </div>
    );
}
componentDidMount(){
	this.getData();
}
getData(){
    //pubsub.publish('消息名',数据)
    this.props.showLoading();
    let url=`/src/data/cationlist.data`;
    fetch(url).then(
      res => res.json()
    ).then(
      data => {
        setTimeout(()=>{
					this.props.hideLoading();  
		  this.setState({listData:data});
		  //console.log(data);
        },1000);
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
)(Cation);