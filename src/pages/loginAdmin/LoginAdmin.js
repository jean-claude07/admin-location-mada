import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik'
import axios from 'axios';

export class LoginAdmin extends Component {
    state={
        message: ''
    }
    render() {
        if(this.state.message){
            setTimeout(() => {
                this.setState({
                    message: ''
                })
            }, 3000);
        }
        return (
            <div class="login">
                <div class="login_wrapper">
                    <div class="animate form login_form">
                    <section class="login_content">
                        <Formik
                            initialValues={{
                                AdminName: '',
                                password: ''
                            }}

                            onSubmit={(values) => {
                                axios.post('admin_session', values).then(response => {
                                    if(response.status === 200){
                                        console.log(response.data)
                                        localStorage.setItem('token', response.data.token)
                                        sessionStorage.setItem( 'id', response.data.user.id)
                                        window.location.reload();
                                    }else{
                                        this.setState({
                                            message: response.data.message
                                        })
                                    }
                                })
                            }}
                        >
                            <Form>
                                <h1>59bis Login</h1>
                                <div>
                                    <Field type="text" class="form-control" name="adminName"  placeholder="Nom de l'administrateur" required />
                                </div>
                                <div>
                                    <Field type="password" class="form-control" name="password" placeholder="Mot de passe" required />
                                </div>
                                <div>
                                    <button class="btn btn-secondary" type="submit" href="#">Log in</button>
                                    <a class="reset_pass" href="#">mot de passe oblier?</a>
                                    <div style={{padding: '5px'}}></div>
                                    <center>
                                        <p className="text-danger">{this.state.message} </p>
                                    </center>
                                </div>

                                <div class="clearfix"></div>

                                <div class="separator">
                                    <p class="change_link">New to site?
                                    <a href="/" class="to_register"> Créer un compte </a>
                                    </p>

                                    <div class="clearfix"></div>
                                    <br />

                                    <div>
                                    <h1><i class="fa fa-paw"></i> 59bis location</h1>
                                    <p>© Espace resever au administrateur de 59 bis location</p>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginAdmin
