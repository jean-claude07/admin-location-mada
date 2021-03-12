import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        const admin = this.props.data.admin
        let image;
        if(admin.adminphoto.url === null){
            image = <img src="images/user.png" alt="..." />
        }else{
            image = <img src={`http://localhost:4000/${admin.adminphoto.url}`} alt="..." />
        }
        return (
            <div>
                <div class="top_nav">
                    <div class="nav_menu">
                        <div class="nav toggle">
                            <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                        </div>
                        <nav class="nav navbar-nav">
                        <ul class=" navbar-right">
                            <li class="nav-item dropdown open" style={{padding: '5px'}}>
                                <selecte class="user-profile " aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                                    {image} {admin && admin.adminName}
                                    <option className="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item"  href="#">Help</a>
                                        <a className="dropdown-item"  href="/profile-admin">Profile</a>
                                        <a className="dropdown-item"  href="#" ><i className="fa fa-sign-out pull-right"></i> Deconnexion</a>
                                    </option>
                                </selecte>
                            </li>

                            <li role="presentation" class="nav-item dropdown open">
                            <a href="javascript:;" class="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-envelope-o"></i>
                                <span class="badge bg-green">6</span>
                            </a>
                            
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
