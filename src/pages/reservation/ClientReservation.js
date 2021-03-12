import axios from 'axios';
import React, { Component } from 'react'

export class ClientReservation extends Component {
    state={
        reservations: [],
        message: ''
    }

    componentDidMount = () => {
        this.getReservation();
    }

    getReservation = () => {
        axios.get(`users/${this.props.location.user_id}`).then(response => {
            this.setState({
                reservations: response.data.location
            });
           
        })
    }

    handleClick = () => {
        axios.patch(`locations/${this.props.location.id}`, {payment: 'OK'}).then(
            response => {
                this.setState({
                    message: response.data.message
                })
            }
        )
    }
    render() {
        const reservations =  this.state.reservations
        return (
            <>
            <div style={{color: 'red'}}><center>{this.state.message} </center> </div>
               <table class="table">
                    <thead>
                        <tr>
                        <th scope="col" className="text-danger"> ID</th>
                        <th scope="col">Nom du produit </th>
                        <th scope="col">Date </th>
                        <th scope="col">Prix totale</th>
                        <th>Mode de payment</th>
                        <th>Action </th>
                        </tr>
                    </thead>
                        <tbody>
                            {reservations && reservations.map(location => {
                                const prix = location.cout * location.nombre
                                let payer;
                                if(location.payment === "OK"){
                                    payer = (
                                        <div class="btn-group">
                                            {/* <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked/> */}
                                            <label class="btn btn-outline-success" for="success-outlined" aria-hidden="true">Non payer</label>

                                            {/* <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"/> */}
                                            <label class="btn btn-danger" for="danger-outlined" onClick={this.handleClick}>Payer</label>
                                        </div>
                                    )
                                }else{
                                    payer = (
                                        <div class="btn-group">
                                            {/* <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked/> */}
                                            <label class="btn btn-success" for="success-outlined" aria-hidden="true">Non payer</label>

                                            {/* <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"/> */}
                                            <label class="btn btn-outline-danger" for="danger-outlined" onClick={this.handleClick}>Payer</label>
                                        </div>
                                    )
                                }
                                return (

                                    <tr>
                                        <th scope="row">{location.id} </th>
                                        <td>
                                            {location.nomProduit}
                                        </td>
                                        <td>
                                            {location.date}
                                        </td>
                                        <td>
                                            {prix} Ariary
                                        </td>
                                        <td>
                                            {location.nomMvola} / ( {location.numero} )
                                        </td>

                                        <td>
                                            {payer}
                                        </td>
                                    </tr>
                                )
                            })}
                                
                        </tbody>
                </table>
            </>
        )
    }
}

export default ClientReservation;

