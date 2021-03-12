import axios from 'axios';
import {Formik, Form, Field} from 'formik';
import React, { Component } from 'react'

export class AddStory extends Component {
    state={
        photo: null,
        description: '',
    }

    handleFile = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }

    handleChange = e => {
        this.setState({
            description: e.target.value
        })
    }
    render() {
        return (
            <div className="container" style={{margin: '10px'}}>
                <br/>
                <Formik
                    initialValues={{
                        title: '',
                       
                        description: '',
                        publushphoto: null

                    }}

                    onSubmit = {(values) => {
                        const formData = new FormData();
                        formData.append('publishingphoto', this.state.photo)
                        formData.append('admin_id', sessionStorage.id)
                        formData.append('title', values.title)
                        formData.append('description', this.state.description)
                        
                        axios.post('publications', formData).then(response => {
                            if (response.status == 201) {
                                window.location.reload();
                            }
                        })

                    }}
                >
                    <Form class="form-label-left input_mask">

                        <div class="col-md-12 col-sm-6  form-group has-feedback">
                            <Field type="text" class="form-control has-feedback-left" name="title" id="inputSuccess2" placeholder="titre du story"/>
                            <span class="fa fa-pencil form-control-feedback left" aria-hidden="true"></span>
                        </div>

                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 ">Photo du produit</label>
                            <div class="col-md-9 col-sm-9 ">
                                <Field type="file" class="form-control" name="produitphoto" onChange={this.handleFile} />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 ">Description </label>
                            <div class="col-md-9 col-sm-9 ">
                                <textarea class="form-control" rows="3" name="description" placeholder="Description du produit" onChange={this.handleChange}>

                                </textarea>
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
            </div>
        )
    }
}

export default AddStory
