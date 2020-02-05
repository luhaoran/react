import React, { Component } from 'react'
import store from './../store'
import { NAME_CHANGE , LIST_CHANGE, actionCreator} from './../store/actionTypes'
import { Link } from 'react-router-dom'
import { Button,List } from 'antd'
import axios from 'axios'



class Child extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()

        //订阅store中的state改变
        store.subscribe(()=>{this.setState(store.getState())})
    }
    
    deleteItem = (index,id) => {
        let list = this.props.list
        axios.post(this.state.domain + '/deleteItem', {
            id,
        })
        .then(function (res) {
            if(res.data.status == 1){
                list.splice(index,1)
                actionCreator(LIST_CHANGE,list)
            }
        })
    }
    render(){
        return (
            <ul>
                {this.props.list.map((item,index)=><li onClick={()=>this.deleteItem(index,item.id)} key={JSON.stringify(item)}>{item.num}</li>)}
            </ul>
        )
    }
}


export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()

        //订阅store中的state改变
        store.subscribe(()=>{this.setState(store.getState())})
    }

    componentDidMount() {
        
    }
    

    render() {
        return (
            <div>
               <Child list={this.state.list} />
            </div>
            
        )
    }
}
