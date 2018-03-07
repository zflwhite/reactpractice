//index.js |jsx == 主入口文件
import React from 'react';
import ReactDom from 'react-dom';

//状态管理
import {createStore} from 'redux';
import {Provider} from 'react-redux';// connect 打造容器组件
import defaultState from './store/state';
import reducer from './store/reducer';

import RouterConfig from './router.config'

//1.创建store对象,把reducer和state传入
const store = createStore(reducer,defaultState);

//描画DOM
ReactDom.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>,
  document.querySelector('#app')
);
