import React, { Component } from 'react'
import ChartRedux from './ChartRedux'
import {Line} from 'react-chartjs-2';
import {createStore} from 'redux'
import axios from 'axios';
const ADD_ELEMENT = 'ADD_ELEMENT'
export class Accueil extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: '',
            produits: '',
            contacts: '',
            locations: '',
            data: {
                labels: ["jan", "fev", "mars", "avr", "mey", "jun", "juil", "aout", "sept", "oct", "nov", "dec"],
                datasets: [
                    {
                        label: "Client",
                        backgroundColor: "rgba(255, 0, 255, 0.75)",
                        data: [4, 10, 12, 15, 13, 19, 40, 58, 29, 26, 28],
                        borderColor: 'none'
                    },
                    {
                        label: "Reservation",
                        backgroundColor: "rgba(0, 255, 0, 0.75)",
                        data: [14, 15, 11, 1, 2, 12, 2, 14, 15, 11, 1],
                        borderColor: '#f4f4f4'
                    }
                ]
            }
        }
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


    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133, 225, 144, 0.85)")
        return gradient;
    }

    getChartData = (canvas) => {
        const data = this.state.data;
        if (data.datasets) {
            let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "withe";
                // set.data = this.getData()
            });
        }

        return data;
    }

    
    
    render() {
        
       
        return (
            <div>
                <center>
                <div>
                    <div class="right_col" role="main">
                        <div class="col-md-12 col light">
                            <div class="tile_count">
                                <div class="col-md-3 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total Users</span>
                                    <div class="count">{this.state.users} </div>
                                    <span class="count_bottom"><i class="green">4% </i> From last Week</span>
                                </div>
                                <div class="col-md-3 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-clock-o"></i> Total produit</span>
                                    <div class="count">{this.state.produits} </div>
                                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>3% </i> From last Week</span>
                                </div>
                                <div class="col-md-3 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total message</span>
                                    <div class="count green">{this.state.contacts} </div>
                                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
                                </div>
                                <div class="col-md-3 col-sm-4  tile_stats_count">
                                    <span class="count_top"><i class="fa fa-user"></i> Total Reservation</span>
                                    <div class="count">{this.state.locations} </div>
                                    <span class="count_bottom"><i class="red"><i class="fa fa-sort-desc"></i>12% </i> From last Week</span>
                                </div>
                                
                                
                            </div>
                        </div>   
                    </div>
                    <div class="clearfix"></div>
                    <div style={{position: 'relative', maxWidth: 800, height: 900, display: 'flex'}} >
                        <Line
                            options={{
                                responsive: true
                            }}

                            data={this.getChartData}
                        />
                    </div>
                     <h1><ChartRedux/></h1>
                    </div>
                </center>
            </div>
        )
    }
}

export default Accueil

