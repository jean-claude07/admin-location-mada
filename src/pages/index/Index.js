import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contenue from './Contenue';

export class Index extends Component {
    render() {
        const user = this.props.user
        return (
            <div class="container body">
                <div class="main_container">
                    <BrowserRouter>
                        <Sidebar data={user} />
                        <Navbar data={user} />
                        <Switch>
                        <div className="content">
                            <div class="right_col" role="main">
                                <div class="row" style={{display: 'flex'}}>
                                    <Contenue data={user} />
                                </div>
                            </div>
                        </div>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default Index
