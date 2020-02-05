import { NAME_CHANGE,LIST_CHANGE } from './../store/actionTypes'

const defaultState = {
    domain : 'http://api.luhaoran.cn',
    name:'honrean',
    list:[]
}

export default (state = defaultState,action) => {
    //Readucer里只能接收state不能改变state 
    if(action.type == NAME_CHANGE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.name = action.value
        return newState
    }

    if(action.type == LIST_CHANGE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value
        return newState
    }
    return state
}