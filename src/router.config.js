import React from 'react';
import {Router,Route,hashHistory,browserHistory,IndexRoute,Redirect} from 'react-router';

import Home from './components/Home';
import Cation from './components/Cation';
import Confirm from './components/Confirm';
import MyCenter from './components/MyCenter';
import ProList from './components/ProList';
import Shopcar from './components/Shopcar';
import Detail from './components/Detail';
import App from './components/App';
import Error from './components/Error';

const RouterConfig = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home}/>
      <Route path="cation" component={Cation}/>
      <Route path="confirm" component={Confirm}/>
      <Route path="detail" component={Detail}/>
      <Route path="myCenter" component={MyCenter}/>
      <Route path="proList" component={ProList}/>
      <Route path="shopcar" component={Shopcar}/> 
      <Route path="*" component={Error}/>
    </Route>
  </Router>
);
export default RouterConfig;