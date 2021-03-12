import axios from 'axios';
import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik';

export class User extends Component {
    state = {
        users: [],
        message: ''
    }

    componentDidMount = () => {
        this.getUsers();
    }

    getUsers = () => {
        axios.get('users').then(response => {
            this.setState({
                users: response.data
            });
        })
    }

    render() {
        const client = this.state.users
        let message;
        setTimeout(() => {
            this.setState({
                message: ''
            })
        }, 20000);
        if(this.state.message){
            message = (
                <div class="alert alert-warning" role="alert">
                <center>{this.state.message} </center>
            </div>
           )
       }
        return (
            <>
                <Formik
                    initialValues={{
                        username: ''
                    }}

                    onSubmit = {(values) => {
                        
                        axios.post('user_search', values).then(response => {
                            if (response.status == 200) {
                                this.setState({
                                    users: response.data
                                })
                            }else{
                                this.setState({
                                    message: response.data.message
                                })
                            }
                        })

                    }}
                >
                    <Form class="input-group">
                        <Field type="search" class="form-control" name="username" placeholder="Search nom d' utilisateur" required />
                        <span class="input-group-btn">
                            <button class="btn btn-secondary" type="submit">rechercher</button>
                        </span>
                    </Form>
                </Formik>
                <div class="col-md-12 col-sm-12" >
                    {message}
                </div>
                <table class="table table-dark table-hover">

                    <thead>
                        <tr>
                            <th scope="col" className="text-danger">ID</th>
                            <th scope="col">PDP</th>
                            <th scope="col">Nom d'utilisateur</th>
                            <th scope="col">Telephone</th>
                            <th scope="col">Email </th>
                            <th scope="col">Menbre depuis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {client && client.map(kil => {
                            const date = new Date(kil.created_at);
                            const vrai = date.toLocaleDateString()
                            return (
                                <tr>
                                    <th scope="row">{kil.id} </th>
                                    <td>
                                        <img src={`http://localhost:4000/${kil.photoUser.url}`} width="100px" class="rounded-circle" alt="..."/>
                                    </td>
                                    <td>
                                        {kil.username}
                                    </td>
                                    <td>
                                        {kil.telephone}
                                    </td>
                                    <td>
                                        {kil.email}
                                    </td>
                                    <td>
                                        {vrai}
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

export default User
