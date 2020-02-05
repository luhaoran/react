import React, { Component } from 'react'
import store from '.'
import { Button } from 'antd'
import { NAME_CHANGE , actionCreator} from './actionTypes'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()

        //订阅store中的state改变
        store.subscribe(()=>{this.setState(store.getState())})
    }

    clickBtn = () => {
        //调用actionTypes中的actionCreator方法创建一个action并派遣发送到reducer中
        actionCreator(NAME_CHANGE,'nihao'); 
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <Button type='primary' onClick={()=>this.clickBtn()}>Click me</Button>
            </div>
        )
    }
}
