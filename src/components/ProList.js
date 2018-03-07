import React from "react";
import "../assets/css/list.css"
import {Link} from "react-router"
class ProList extends React.Component{
	constructor(){
		super();
		this.state={
			typeData:[]
		}
		
	}
  render(){
    return(
      <div>
        <header className="mui-bar mui-bar-nav" id="header">
			<a className="btn" href="javascript:history.go(-1)">
	            <i className="iconfont icon-fanhui"></i>
	        </a>
	       <h4>商品列表</h4>
	    </header>


		
		<div className="warp clearfloat">
			<div className="lists clearfloat">
				<div className="top clearfloat">
					<ul>
						<li>默认</li>
						<li>价格<i className="iconfont icon-xiala"></i></li>
						<li>销量<i className="iconfont icon-xiala"></i></li>
					</ul>
				</div>
				<div className="bottom clearfloat">
					
					{
						this.state.typeData.map((item,index)=>{
							return(
								<div className="lie clearfloat" key={item.id}>
									<Link to="/Detail">
										<div className="tu clearfloat fl">
											<img src={item.img}/>
										</div>
									</Link>
									<div className="right clearfloat fl">
										<Link to="/Detail">
											<p className="tit">{item.proname}</p>
										</Link>
										<div className="xia clearfloat">
											<Link to="/Detail">
												<p className="jifen fl over">{item.cost}积分</p>
											</Link>
									
										</div>
									</div>
								</div>)
						})
					}
				</div>
			</div>
		</div>
      </div>
    );
  }
  componentDidMount(){
    this.getData();
  }
  getData(){
    let url=`/src/data/index.data`;
    fetch(url).then(
	
      res => res.json()
    ).then(
	  
      
	  data => {
		  setTimeout(()=>{
			if(data[this.props.location.query.dataid-1]==undefined){
				data[this.props.location.query.dataid-1]=data[1]
			}
			this.setState({typeData:data[this.props.location.query.dataid-1].s})
			
						
		  },0)
	  }	  
    )
  }
}
export default ProList;