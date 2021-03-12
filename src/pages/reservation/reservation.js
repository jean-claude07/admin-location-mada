import axios from 'axios';
import React, { Component } from 'react'
import ClientProfile from './ClientProfile';
import ClientReservation from './ClientReservation';
import Fuck from './Fuck';

export class reservation extends Component {
    state={
        locations: [],
        click: ''
    }

    componentDidMount = () => {
        this.getLocation();
    }

    getLocation = () => {
        axios.get('locations').then(response => {
            this.setState({
                locations: response.data
            })
        })
    }

    

    render() {
        const locations = this.state.locations
        
        return (
            <div>
                <div class="col-md-12" role="main">
                    <div class="col-md-12">
                        <div class="page-title">
                            <div class="title_left">
                                <h3>Liste <small>des reservation</small></h3>
                            </div>

                        </div>

                        <div class="clearfix"></div>

                            {locations && locations.map(location => {
                                
                                return (
                                    <>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <Fuck message={location}/>
                                            </div>
                                        </div>
                                        <div class="clearfix"><hr/></div>
                                    </>
                                )
                            })}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default reservation
