import React, { Component } from 'react'
import AddProduit from './AddProduit'
import ProduitList from './ProduitList'

export class E_commerce extends Component {
    state={
        add: false
    }

    handleClick = () => {
        this.setState({
            add: true
        })
    }

    render() {
        let add_produit;
        if(this.state.add === true){
            add_produit = (
                <div class="x_panel">
                    <div class="x_title">
                    <h2>Ajouter un produit </h2>
                    <div class="nav navbar-right panel_toolbox">
                        
                    </div>
                    <div class="clearfix"></div>
                    </div>
                    <AddProduit/>
                </div>
            )
        }else{
            add_produit = (
                <div class="x_panel">
                    <div class="x_title">
                    <h2>List des produit </h2>
                    <div class="nav navbar-right panel_toolbox">
                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>
                            Ajouter un produit
                        </button>
                    </div>
                    <div class="clearfix"></div>
                    </div>
                    <ProduitList/>
                </div>
            )
        }
        console.log(this.state)
        return (
            <>
                <div class="col-md-12" role="main">

                    <div class="">
                    <div class="page-title">
                        <div class="title_left">
                        <h3>Page de Production</h3>
                        </div>
                    </div>
                    
                    <div class="clearfix"></div>

                    <div class="row">
                        <div class="col-md-12 col-sm-12 ">
                            {add_produit}
                        </div>
                    </div>
                    </div>
                </div>
                
            </>
        )
    }
}

export default E_commerce
