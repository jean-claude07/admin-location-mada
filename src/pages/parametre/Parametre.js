import React, { Component } from 'react'
import Profilepersonnel from './Profilepersonnel';
import PublicationList from './PublicationList';

export class Parametre extends Component {
    render() {
        const admin = this.props.user.admin
       
        return (
            <div>
                <div className="col-md-12 col-sm-12 " role="main">
                    <div className="">
                        <div className="page-title">
                        <div className="title_left">
                            <h3>User Profile</h3>
                        </div>

                        <div className="title_right">
                            <div className="col-md-5 col-sm-5  form-group pull-right top_search">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for..."/>
                                <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button">Go!</button>
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="clearfix"></div>

                        <div className="row">
                        <div className="col-md-12 col-sm-12 ">
                            <div className="x_panel">
                            <div className="x_title">
                                <h2>User Report <small>Activity report</small></h2>
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
                                <Profilepersonnel user={this.props.user}/>
                                <div className="col-md-12 col-sm-12 ">

                                
                                
                                <div id="graph_bar" style={{width:'100%', height:'20px'}}></div>

                                            <div className="" role="tabpanel" data-example-id="togglable-tabs">
                                                
                                                <div id="myTabContent" className="tab-content">
                                                    <div role="tabpanel" className="tab-pane active " id="tab_content1" aria-labelledby="home-tab">

                                                        <ul className="messages">
                                                            <li>
                                                                <PublicationList />
                                                            </li>
                                                            <li>

                                                                <div class="list-group">
                                                                    <div  class="list-group-item list-group-item-action" aria-current="true">
                                                                        <div class="card col-12" >
                                                                            <div class="d-flex w-100 justify-content-between">
                                                                                    <div class="">
                                                                                        <h5 class="card-title">
                                                                                            <img src="images/user.png" alt="..." className="img-circle" width="90px"/> &nbsp; &nbsp;
                                                                                            jean claude
                                                                                        </h5>
                                                                                    </div>  
                                                                                <small>
                                                                                    <div className="message_date">
                                                                                        <h3 className="date text-info">24</h3>
                                                                                        <p className="month">May</p>
                                                                                    </div>
                                                                                </small>
                                                                            </div>
                                                                            <>
                                                                                <div>

                                                                                    <div class="">
                                                                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                                                    </div>
                                                                                    <div className="image-responsive" >
                                                                                        <img src="images/cropper.jpg" class="card-img-bottom" alt="..." style={{borderRadius: '10px'}} />
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                            <div id="graph_bar" style={{width:'100%', height:'10px'}}></div>
                                                                            <div class="btn-group" style={{margin: '15px'}}>
                                                                                <button type="button" class="btn btn-outline-primary">
                                                                                    <span class="badge">9</span>&nbsp; &nbsp;  J'aime
                                                                                </button>
                                                                                <button type="button" class="btn btn-outline-secondary">
                                                                                    <span class="badge ">9</span> &nbsp; &nbsp; commentaire
                                                                                </button>
                                                                            </div>
                                                                            <div id="graph_bar" style={{width:'100%', height:'10px'}}><hr/></div>
                                                                                <div class="card-body">
                                                                                    <div class="card-title">
                                                                                        <img src="images/user.png" alt="..." className="img-circle" width="80px"/> &nbsp; &nbsp;
                                                                                        <strong>Mikolo tiana</strong>
                                                                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                                    </div>
                                                                                </div>
                                                                            <div id="graph_bar" style={{width:'100%', height:'10px'}}></div>
                                                                        </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Parametre
