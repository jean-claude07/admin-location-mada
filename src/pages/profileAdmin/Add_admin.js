import axios from 'axios';
import {Formik, Form, Field} from 'formik'
import React, { Component } from 'react'

export class Add_admin extends Component {
    state={
        photo: null
    }

    handleFile = e => {
        this.setState({
            photo: e.target.files[0]
        })
    }
    render() {
        return (
            <>
                <Formik
                    initialValues={{
                        nom: '',
                        email: '',
                        password: '',
                        adminphoto: null

                    }}

                    onSubmit = {(values) => {
                        const formData = new FormData();
                        formData.append('adminphoto', this.state.photo)
                        formData.append('adminName', values.nom)
                        formData.append('email', values.email)
                        formData.append('password', values.password)
                        
                        axios.post('/admins', formData).then(response => {
                            if (response.status == 200) {
                                window.location.reload();
                            }
                        })

                    }}
                >
                    <Form class="form-label-left input_mask">

                        <div class="col-md-6 col-sm-6  form-group has-feedback">
                            <Field type="text" class="form-control has-feedback-left" name="nom" id="inputSuccess2" placeholder="Nom d' administrateur"/>
                            <span class="fa fa-pencil form-control-feedback left" aria-hidden="true"></span>
                        </div>

                        <div class="col-md-6 col-sm-6  form-group has-feedback">
                            <Field type="email" class="form-control" id="inputSuccess3" name="email" placeholder="Votre email"/>
                            <span class="fa fa-envelope form-control-feedback right" aria-hidden="true"></span>
                        </div>

                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 ">Photo </label>
                            <div class="col-md-9 col-sm-9 ">
                                <Field type="file" class="form-control" name="adminphoto" onChange={this.handleFile} />
                                <span class="fa fa-upload form-control-feedback right" aria-hidden="true"></span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 ">Mot de passe</label>
                            <div class="col-md-9 col-sm-9 ">
                                <Field type="password" class="form-control" name="password" />
                                <span class="fa fa-lock form-control-feedback right" aria-hidden="true"></span>
                            </div>
                        </div>
                        <div class="ln_solid"></div>
                        
                        <div class="form-group row">
                            <div class="col-md-9 col-sm-9  offset-md-3">
                                <button class="btn btn-primary" type="reset">Reset</button>
                                <button type="submit" class="btn btn-success">Enregistrer</button>
                            </div>
                        </div>

                    </Form>
                </Formik>
            </>
        )
    }
}

export default Add_admin
