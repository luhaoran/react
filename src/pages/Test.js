import React, { Component } from 'react'
import { Button , Input, List, Icon } from 'antd'
import store from './../store'
import { LIST_CHANGE , actionCreator } from './../store/actionTypes'

const { Search } = Input;

export default class Test extends Component {
    constructor(props){
        super(props);

        this.state = store.getState()

        //订阅store的更新，再赋值给state
        store.subscribe(()=>{this.setState(store.getState())})
    }

    componentDidMount(){
        const id = this.props.match.params.id
        console.log('id:'+id)
    }

    addList = value => {
        console.log(this.state.list)
        if(value){
            let list = [...this.state.list,value]
            actionCreator(LIST_CHANGE,list)
            this.refs.inputValue.input.state.value = '' //清除输入框内容
        }
        
    }

    removeItem = index => {
        let list = this.state.list
        list.splice(index,1)
        actionCreator(LIST_CHANGE,list)
    }

    render() {
        return (
            <div style={{width:'96%',marginLeft:'2%'}}>
                <Search
                    style={{marginTop:'10px'}}
                    ref="inputValue"
                    placeholder="输入查询语句"
                    enterButton="查询"
                    onSearch={value => this.addList(value)}
                />
                <List
                    size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={
                      (item,index) => 
                        <List.Item>
                            <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                                <div>
                                    {item}
                                </div>
                                <div>
                                <Button type="danger" size="small" onClick={()=>this.removeItem(index)}>
                                    <Icon type="close"  />
                                </Button>
                                
                                </div>
                            </div>
                        </List.Item>
                    }
                    style={{marginTop:'10px'}}
                />
            </div>
        )
    }
}
