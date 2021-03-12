import React, { Component } from 'react'
import ClientProfile from './ClientProfile'
import ClientReservation from './ClientReservation'

export class Fuck extends Component {
    state = {
        click: ''
    }
    handleProfile = () => {
        this.setState({
            click: 1
        })
    }

    handleReservation = () => {
        this.setState({
            click: 2
        })
    }
    render() {

        let change;

        if(this.state.click === 1){
            change = (
                <ClientProfile location={this.props.message} />
            )
        }else if(this.state.click === 2){
            change = (
                <ClientReservation location={this.props.message} />
            )
        }else{
            change = (
                <ClientProfile location={this.props.message}  />
            )
        }

        return (
            <>
              <ul class="nav nav-tabs bar_tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab"
                        onClick={this.handleProfile} role="tab" aria-selected="true">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab"
                        onClick={this.handleReservation} data-toggle="tab" role="tab" aria-selected="false">Reservation</a>
                    </li>
                    
                </ul>
                <div class="tab-content" id="myTabContent">
                    
                    <div class="tab-pane fade show active" >
                        {change}
                    </div>  
                </div>



            </>
        )
    }
}

export default Fuck;
