import axios from 'axios';
import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

const ADD_ELEMENT = 'ADD_ELEMENT';

export class Presentation extends Component {
    state = {
        users: '',
        produits: '',
        locations: '',
        contacts: ''
    }

    componentDidMount = () => {
        this.getUsers();
        this.getProduit();
        this.getLocation();
        this.getContact();
    }

    getUsers = () => {
        axios.get('user_counteur').then(response => {
            this.setState({
                users: response.data
            });
        })
    }

    getProduit = () => {
        axios.get('produit_conteur').then(response => {
            this.setState({
                produits: response.data
            });
        })
    }

    getContact = () => {
        axios.get('contact_conteur').then(response => {
            console.log(response.data)
            this.setState({
                contacts: response.data
            });
        })
    }

    getLocation = () => {
        axios.get('location_conteur').then(response => {            
            this.setState({
                locations: response.data
            });
        })
    }



    graphReducer = (state = this.state.users, action) => {
        switch (action.type){
            case ADD_ELEMENT:
                return [...state, ...action.payload]
            default:
                return state
        }
    
    }


    render() {
        // const state = this.graphReducer(undefined, {})
        // console.log(state.map(users => {users.id}))
        console.log(this.state)
        const contact = this.state.contacts
        const location = this.state.locations
        const user = this.state.users
        const produit = this.state.produits
        return (
            <div>
                <div class="col-md-12" role="main">

                    <div class="">
                        <div class="page-title">
                            <div class="title_left">
                            <h3>Presentation graphique</h3>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="row">
                        <div class="col-md-12 col-sm-12 ">
                            <div>
                                <Bar
                                    data={{
                                        labels: ['Performence', 'utilisateurs', 'Produits', 'Location', 'contact', 'Orange ', 'Darkblue'],
                                        datasets: [
                                            {
                                                label: '# Performence du site',
                                                data: [0.10, user, produit, location, contact, 20],
                                                backgroundColor: ['red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange ', 'Darkblue'],
                                                borderWidth: 3,
                                            }
                                        ]
                                    }}

                                    width="800%"
                                    height="400%"
                                   
                                    options={{
                                        maintainAspectRatio: false,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Presentation
