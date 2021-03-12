import axios from 'axios';
import React, { Component } from 'react'

export class ClientProfile extends Component {
    
    state={
        client: [],
        tous: []
    }

    componentDidMount = () => {
        this.getClient();
    }

    getClient = () => {
        axios.get(`users/${this.props.location.user_id}`).then(response => {
            this.setState({
                client: response.data.client
            });
            this.setState({
                tous: response.data.allReservation
            })
        })
    }
    render() {
        const user = this.state.client
        const image = user.photoUser
        return (
            <>
                <div width="100%">
                   
                    <table class="table">
                        <thead>
                            <tr>
                                {/* <th scope="col" className="text-danger">uI</th> */}
                                <th scope="col">PDP</th>
                                <th scope="col">Nom 'utilisateur</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Telephone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                                <th scope="row">
                                    <span class="badge bg-warning text-dark">{user.id} </span>
                                    <img src={`http://localhost:4000/${image && image.url}`} width="100px" class="rounded-circle" alt="..."/>
                                    
                                </th>
                                <td>
                                    <br/><br/>
                                    {user.username}
                                </td>
                                <td>
                                <br/><br/>
                                    {user.email}
                                </td>
                                <td>
                                <br/><br/>
                                    {user.telephone}
                                </td>
                                <td>
                                <br/><br/>
                                    <button type="button" class="btn btn-outline-info">
                                        <span class="badge bg-light text-dark">{this.state.tous} </span> Reservations
                                        <span class="sr-only">unread messages</span>
                                    </button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default ClientProfile
