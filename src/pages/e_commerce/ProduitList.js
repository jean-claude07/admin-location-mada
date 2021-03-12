import axios from 'axios';
import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik';

export class ProduitList extends Component {
    state={
        produit: [],
        message: ''
    }

    componentDidMount = () => {
        this.getProduit();
        
    }

    getProduit = () => {
        axios.get('produits').then(response => {
            this.setState({
                produit: response.data
            })
        })
    }


    render() {
        const produits = this.state.produit

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
                <div class="x_content">
                    <Formik
                        initialValues={{
                            nom: ''
                        }}

                        onSubmit = {(values) => {
                            
                            axios.post('produit_search', values).then(response => {
                                if (response.status == 200) {
                                    this.setState({
                                        produit: response.data
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
                            <Field type="search" class="form-control" name="nom" placeholder="Search nom du produit" required />
                            <span class="input-group-btn">
                                <button class="btn btn-secondary" type="submit">rechercher</button>
                            </span>
                        </Form>
                    </Formik>
                        {message}
                    {produits && produits.map(produit => {
                        return (
                            <>  
                                <div class="col-md-7 col-sm-7 ">
                                    <div class="product-image">
                                        <img src={`http://localhost:4000/${produit.produitphoto.url}`} alt="..." />
                                    </div>
                                    
                                </div>

                                <div class="col-md-5 col-sm-5 " style={{border: '0px solid #e5e5e5'}}>

                                    <h3 class="prod_title">{produit.nom} </h3>

                                    <p>
                                        {produit.description}
                                    </p>

                                    <div class="">
                                        <div class="product_price">
                                            <h4 class="price">
                                                tarif : {produit.cout} Ariary/pièce
                                            </h4>
                                            
                                            <br/>
                                            <hr/>
                                            Goupe : {produit.groupe}
                                        </div>
                                    </div>

                                </div>
                                <div className="clear" style={{padding: '5px'}}><hr/></div>
                            </>
                        )
                    })}
                    {/* <div class="col-md-7 col-sm-7 ">
                        <div class="product-image">
                        <img src="images/prod-1.jpg" alt="..." />
                        </div>
                        
                    </div>

                    <div class="col-md-5 col-sm-5 " style={{border: '0px solid #e5e5e5'}}>

                        <h3 class="prod_title">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>

                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
        
                        <br />

                        <div class="">
                            <div class="product_price">
                                <h1 class="price">Ksh80.00</h1>
                                <span class="price-tax">Ex Tax: Ksh80.00</span>
                                <br/>
                            </div>
                        </div>

                    </div> */}

                </div>
            </>
        )
    }
}

export default ProduitList;
