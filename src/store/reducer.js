import defaultState from "./state";

const reducer = (state=defaultState, action)=>{
  let {type,payload}=action;
  switch(type){
    case 'SHOW_NAV':
      return Object.assign({},state,{
        bNav:true
      });
      break;
    case 'HIDE_NAV':
      return Object.assign({},state,{
        bNav:false
      });
      break;
    case 'SHOW_FOOT':
      return Object.assign({},state,{
        bFoot:true
      });
      break;
    case 'HIDE_FOOT':
      return Object.assign({},state,{
        bFoot:false
      });
      break;
    case 'SHOW_LOADING':
      return Object.assign({},state,{
        bLoading:true
      });
      break;
    case 'HIDE_LOADING':
      return Object.assign({},state,{
        bLoading:false
      });
      break;
    default:
      return state;
  }
};
export default reducer;