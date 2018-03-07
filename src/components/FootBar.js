import React from "react";
import {Link} from 'react-router';
const FootBar = () => (
    <footer className="page-footer fixed-footer" id="footer">
			<ul>
				<li>
					<Link to="/Home">					
						<i className="iconfont icon-shouye"></i>
						<p>首页</p>
					</Link>
				</li>
				<li>
					<Link to="/Cation">	
						<i className="iconfont icon-icon04"></i>
						<p>分类</p>
					</Link>
				</li>
				<li>
					<Link to="/Shopcar">
						<i className="iconfont icon-gouwuche"></i>
						<p>购物车</p>
					</Link>
				</li>
				<li>
					<Link to="/MyCenter">
						<i className="iconfont icon-yonghuming"></i>
						<p>我的</p>
					</Link>
				</li>
			</ul>
		</footer>
);
export default FootBar;