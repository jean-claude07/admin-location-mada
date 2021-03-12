import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Sidebar extends Component {
    handleClick = () => {
        sessionStorage.clear()
        localStorage.clear(window.location.reload())
    }
    render() {
        const admin = this.props.data.admin
        let image;
        if(admin.adminphoto.url === null){
            image = <img src="images/user.png" alt="..." className="img-circle profile_img"/>
        }else{
            image = <img src={`http://localhost:4000/${admin.adminphoto.url}`} alt="..." className="img-circle profile_img"/>
        }
        return (
            <div>
                <div className="col-md-3 left_col " style={{position: 'fixed'}}>
                    <div className="left_col scroll-view "  >
                        <div className="navbar nav_title" style={{border: '0'}}>
                            <a href="/" className="site_title"><i className="fa fa-paw"></i> <span>Location 59bis</span></a>
                        </div>

                        <div className="clearfix"></div>

                        <div className="profile clearfix">
                        <div className="profile_pic">
                            {image}
                        </div>
                        <div className="profile_info">
                            <span>Welcome,</span>
                            <h2>{admin && admin.adminName} </h2>
                        </div>
                        </div>

                        <br />

                        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu" >
                            <div className="menu_section" >
                                <h3>General</h3>
                                <ul className="nav side-menu">
                                <li><Link to="/"><i className="fa fa-home"></i> Home </Link>

                                </li>
                                <li><Link to="/message"><i className="fa fa-edit"></i> Messages </Link>
                                
                                </li>
                                <li><Link to="/commerce"><i className="fa fa-desktop"></i> Production </Link>
                                </li>
                                <li><Link to="/reservations"><i className="fa fa-table"></i> Reservations </Link>
                                
                                </li>
                                <li><Link to="/presentation"><i className="fa fa-bar-chart-o"></i> Presentation </Link>
                                
                                </li>
                                <li><Link to="/gallery"><i className="fa fa-clone"></i>Gallery </Link>
                                
                                </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="sidebar-footer hidden-small">
                        <a href="/parametre" data-toggle="tooltip" data-placement="top" title="Settings">
                            <span class="fa fa-gears" aria-hidden="false"></span>
                        </a>
                        <a href="/utilisateurs" data-toggle="tooltip" data-placement="top" title="FullScreen">
                            <span class="fa fa-group" aria-hidden="true"></span>
                        </a>
                        <a href="/profile" data-toggle="tooltip" data-placement="top" title="utilisateur">
                            <span class="fa fa-user" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Deconnexion" href="#"  >
                            <span class="fa fa-power-off" aria-hidden="true" onClick={this.handleClick}></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
