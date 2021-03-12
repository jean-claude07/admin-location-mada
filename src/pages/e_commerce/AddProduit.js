import React, { Component } from 'react';
import {Form, Formik, Field} from 'formik';
import axios from 'axios';

export class AddProduit extends Component {
    state={
        photo: null,
        description: ''
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
            <>
                <Formik
                    initialValues={{
                        nom: '',
                        cout: '',
                        groupe: '',
                        description: '',
                        produitphoto: null

                    }}

                    onSubmit = {(values) => {
                        const formData = new FormData();
                        formData.append('produitphoto', this.state.photo)
                        formData.append('cout', values.cout)
                        formData.append('groupe', values.groupe)
                        formData.append('nom', values.nom)
                        formData.append('description', this.state.description)
                        
                        axios.post('/produits', formData).then(response => {
                            if (response.status == 201) {
                                window.location.reload();
                            }
                        })

                    }}
                >
                    <Form class="form-label-left input_mask">

                        <div class="col-md-6 col-sm-6  form-group has-feedback">
                            <Field type="text" class="form-control has-feedback-left" name="nom" id="inputSuccess2" placeholder="Nom du produit"/>
                            <span class="fa fa-pencil form-control-feedback left" aria-hidden="true"></span>
                        </div>

                        <div class="col-md-6 col-sm-6  form-group has-feedback">
                            <Field type="number" class="form-control" id="inputSuccess3" name="cout" placeholder="Tarif du produit"/>
                            <span class="fa fa-money form-control-feedback right" aria-hidden="true">Ar</span>
                        </div>

                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 ">Photo du produit</label>
                            <div class="col-md-9 col-sm-9 ">
                                <Field type="file" class="form-control" name="produitphoto" onChange={this.handleFile} />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-form-label col-md-3 col-sm-3 ">Groupe </label>
                            <div class="col-md-9 col-sm-9 ">
                                <Field as="select" class="select2_single form-control" tabindex="-1" name="groupe">
                                    <option >Groupe du produit ...</option>
                                    <option value="Tonnelle">Tonnelle</option>
                                    <option value="Table">Table</option>
                                    <option value="Housse">Housse</option>
                                    <option value="Vaisselle">Vaisselle</option>
                                    <option value="Seau_a_champagne">Seau à champagne</option>
                                    <option value="Portes_plats">Portes plats</option>
                                    <option value="Pupitre">Pupitre</option>
                                    <option value="Marmites">Marmites</option>
                                    <option value="Nappe">Nappe</option>
                                    <option value="Plats">Plats</option>
                                    <option value="Chauffe_plats">Chauffe plats</option>
                                    <option value="Verres">Verres</option>
                                    <option value="Chaises">Chaises</option>
                                </Field>
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
            </>
        )
    }
}

export default AddProduit
