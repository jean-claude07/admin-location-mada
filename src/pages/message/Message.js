import React, { Component } from 'react'
import axios from 'axios';

export class Message extends Component {
    state={
        messages: []
    }

    componentDidMount = () => {
        this.getContacts();
    }

    getContacts = () => {
        axios.get('contacts').then(response => {
            
            this.setState({
                messages: response.data
            })
        })
    }
    render() {
        const messages = this.state.messages
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 ">
                    <div className="x_panel">
                        <div className="x_title">
                        <h2>Message <small>List</small></h2>
                        <ul className="nav navbar-right panel_toolbox">
                            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                            </li>
                            <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Settings 1</a>
                                <a className="dropdown-item" href="#">Settings 2</a>
                                </div>
                            </li>
                            <li><a className="close-link"><i className="fa fa-close"></i></a>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                        <div className="dashboard-widget-content">

                            <ul className="list-unstyled timeline widget">
                                {messages && messages.map(message => {
                                    const date = new Date(message.created_at);
                                    const now = new Date()
                                    const day = now.toLocaleDateString()
                                    const vrai = date.toLocaleDateString()

                                    let actu;
                                    if(vrai === day){
                                        actu = (
                                            <span style={{color: 'violet'}}>
                                                <div className="spinner-grow spinner-grow-sm" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </span>
                                        )
                                    }
                                    return (
                                        <>
                                            
                                            <li>
                                                <div className="block">
                                                    <div className="block_content">
                                                        <h2 className="title">
                                                                        <a>Sujet :&nbsp; {message.subject}  </a>
                                                        </h2>
                                                        <div className="byline">
                                                           {actu} &nbsp;
                                                            <span>Envoyer le {vrai} </span> par <a>{message.name} </a>
                                                        </div>
                                                        <p className="excerpt">{message.message} <a><strong className="text-secondary">&nbsp; {message.email} </strong></a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </>
                                    )
                                })}
                                <li>
                                    <div className="block">
                                    <div className="block_content">
                                        <h2 className="title">
                                                        <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                                    </h2>
                                        <div className="byline">
                                        <span>13 hours ago</span> by <a>Jane Smith</a>
                                        </div>
                                        <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                                        </p>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="block">
                                    <div className="block_content">
                                        <h2 className="title">
                                                        <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                                    </h2>
                                        <div className="byline">
                                        <span>13 hours ago</span> by <a>Jane Smith</a>
                                        </div>
                                        <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                                        </p>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="block">
                                    <div className="block_content">
                                        <h2 className="title">
                                                        <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                                    </h2>
                                        <div className="byline">
                                        <span>13 hours ago</span> by <a>Jane Smith</a>
                                        </div>
                                        <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                                        </p>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message
