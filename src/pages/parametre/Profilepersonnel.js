import React, { Component } from 'react'
import AddStory from './AddStory'

export class Profilepersonnel extends Component {
    state={
        add: false
    }

    handleClick = () => {
        this.setState({
            add: true
        })
    }
    render() {
        const admin = this.props.user.admin
        let image;
        if(admin.adminphoto.url === null){
            image = <img src="images/user.png" className="img-responsive avatar-view" alt="Avatar" title="Change the avatar"/>
        }else{
            image = <img src={`http://localhost:4000/${admin.adminphoto.url}`} className="img-responsive avatar-view" 
            alt="Avatar" title="Change the avatar" width="250px"/>
        }

        const date = new Date(admin.created_at);
        const day = date.toDateString()
        const progress = date.getMinutes();

        if(this.state.add == true){
            return (
                <div class="card mb-12" >
                    <div class="row g-0">
                            <AddStory/>
                    </div>
                </div>
            )
        }
        return (
            <>
                <div class="card mb-12" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <div className="profile_img">
                                <div id="crop-avatar">
                                    {image}
                                </div>
                                <div style={{padding: '5px'}} ></div>
                                <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>Add Story</button>
                            </div>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <div className="profile_title " style={{position: 'static'}}>
                                <div className="col-md-6">
                                    <h4>Activer depuis le </h4>
                                    </div>
                                    <div className="col-md-6">
                                    <div id="reportrange" className="pull-right" style={{marginTop: '5px', background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #E6E9ED'}}>
                                        <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
                                        <span>{day} </span> <b className="caret"></b>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-unstyled user_data">
                                <li><i className="fa fa-map-marker user-profile-icon"></i><strong> {admin.adminName} </strong>
                                </li>

                                <li>
                                <i className="fa fa-briefcase user-profile-icon"></i> {admin.email}
                                </li>

                                <li className="m-top-xs">
                                <i className="fa fa-external-link user-profile-icon"></i>
                                <a href="http://www.ganjah.com/profile/" target="_blank">www.Location.com</a>
                                </li>
                                <a className="btn btn-success"><i className="fa fa-edit m-right-xs"></i>Ajouter profile</a>
                                <br />
                            </ul>
                            <h4>Etat du profile</h4>
                            <ul className="list-unstyled user_data">
                                <li>
                                <p>Profile  Actuelle :</p>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${progress}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                            
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Profilepersonnel
