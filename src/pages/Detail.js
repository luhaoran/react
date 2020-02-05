import React, { Component } from 'react'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import store from './../store'

export default class Detail extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()

        //订阅store中的state改变
        store.subscribe(()=>{this.setState(store.getState())})
    }

    componentDidMount() {
        console.log(this.props.match.params)
    }
    

    render() {
        return (
            <div>
                {this.state.domain}
            </div>
        )
    }
}