import React, { Component } from 'react'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Home from './Home'
import Detail from './Detail.js'
import axios from 'axios'
import store from './../store'
import { LIST_CHANGE, actionCreator} from './../store/actionTypes'

class RouterComponent extends Component{

    constructor(props){
        super(props)
        this.state = store.getState()
    }

    getData(){
        const api = this.state.domain + '/getList'
        axios.get(api).then(res=>{
            const data = res.data
            if(data.status == 1){
                actionCreator(LIST_CHANGE,data.list)
            }
        })
    }

    componentDidMount(){
        this.getData()
    }

    

    render(){
        return (
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/detail/:id" component={Detail} />
            </Router>
        )
    }
}


export default RouterComponent
