import React, { Component } from 'react'
import Add_admin from './Add_admin';
import ListAdmin from './ListAdmin';

export class ProfileAdmin extends Component {
    state={
        ajout: ''
    }

    handleClick = () => {
        this.setState({
            ajout: '1'
        })
    }
    render() {
        let AddAdmin;

        if(this.state.ajout === '1'){
            AddAdmin = (
                <div class="x_panel">
                    <div class="x_title">
                    <h2>Ajouter un Admin </h2>
                    <div class="nav navbar-right panel_toolbox">
                        
                    </div>
                    <div class="clearfix"></div>
                    </div>
                    <Add_admin/>
                </div>
            )
        }else{
            AddAdmin = (
                <div class="x_panel">
                    <div class="x_title">
                    <h2>List des Administrateurs </h2>
                    <div class="nav navbar-right panel_toolbox">
                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>
                            Ajouter un Administrateur
                        </button>
                    </div>
                    <div class="clearfix"></div>
                    </div>
                    <ListAdmin/>
                </div>
            )
        }
        console.log(this.state)
        return (
            <div class="col-md-12" role="main">

                <div class="">
                <div class="page-title">
                    <div class="title_left">
                    <h3>Espace Administrateur</h3>
                    </div>
                </div>
                
                <div class="clearfix"></div>

                <div class="row">
                    <div class="col-md-12 col-sm-12 ">
                        {AddAdmin}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ProfileAdmin
