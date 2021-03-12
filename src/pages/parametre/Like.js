import axios from 'axios';
import React, { Component } from 'react'

export class Like extends Component {
    state={
        like: null,
        etat: false,
        love: {}
    }

    componentDidMount = () => {
        this.getPiblish();
    }

    getPiblish = () => {
        axios.get(`publications/${this.props.data.id}`).then(response => {
            this.setState({
                like: response.data.like
            })
        })
    }

    handleClick = () => {
        this.setState({
            like: this.state.like + 1
        });

        this.setState({
            etat: true
        });

        const like = new FormData;
        like.append('love', this.state.etat)
        like.append('publication_id', this.props.data.id)
        axios.post('likes', like).then(response => {
            this.setState({
                love: response.data
            })
        })
    }

    handleReclick = () => {
        this.setState({
            like: this.state.like - 1
        });

        this.setState({
            etat: false
        })

        axios.delete(`likes/${this.state.love.id}`)
    }
    render() {
        let show;
        if(this.state.etat === true){
            show = (
                <button type="button" class="btn btn-outline-primary" onClick={this.handleReclick} >
                    <span class="badge">{this.state.like} </span>&nbsp; &nbsp;  J'aime
                </button> 
            )
        }else{
            show = (
               <button type="button" class="btn btn-outline-primary" onClick={this.handleClick} >
                    <span class="badge">{this.state.like} </span>&nbsp; &nbsp;  J'aime
                </button> 
            )
        }
        return (
            <>
                {show}
            </>
        )
    }
}

export default Like
