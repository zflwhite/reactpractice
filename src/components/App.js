import React from "react";
import FootBar from './FootBar';
import Loading from './Loading';
import {connect} from "react-redux";
class App extends React.Component{
  render(){
    let {
      bFoot,showFoot,hideFoot,bLoading,showLoading,hideLoading
    } = this.props;

    let path=this.props.location.pathname;
    if(/Home/.test(path)){
      
      setTimeout(showFoot,0);
    }
    

    return (
      <div className="app">
        {bLoading?<Loading/>:undefined}
        {this.props.children}
        {bFoot?<FootBar/>:undefined}
      </div>
    );
  }
}

//-----------------------------------------------

//状态state来的属性都在mapStateToProps里面
const mapStateToProps=(state,ownProps)=>{
  return {
    bLoading:state.bLoading,
    bFoot:state.bFoot
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
    },
    showFoot:()=>{
      dispatch({type:'SHOW_FOOT'});
    },
    hideFoot:()=>{
      dispatch({type:'HIDE_FOOT'});
    },

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
