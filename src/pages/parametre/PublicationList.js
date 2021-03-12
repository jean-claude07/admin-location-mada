import axios from 'axios'
import React, { Component } from 'react'
import AdminPub from './AdminPub'
import Like from './Like'

export class PublicationList extends Component {
    state={
        publications: [],
        comment: false,
        description: ''
    }

    componentDidMount = () => {
        this.getPublication()
    }

    getPublication = () => {
        axios.get('publications').then(response => {
            this.setState({
                publications: response.data
            })
        })
    }

    handleSubmit = (id) => {
        const data = new FormData;
        data.append('comment', this.state.description)
        data.append('admin_id', sessionStorage.id )
        data.append('publication_id', id)
        axios.post('commentaires').then(resp => {
            console.log(resp)
        })
    }

    handleClick = () => {
        this.setState({
            comment: true
        })
    }

    handleChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    
    render() {
        const pubmications = this.state.publications
        
        return (
            <>
                {pubmications && pubmications.map(pub => {
                    const id = pub.id
                   
                    return (

                        <div class="list-group">
                            <div  class="list-group-item list-group-item-action" aria-current="true">
                                <div class="card col-12" >
                                    <div class="d-flex w-100 justify-content-between">
                                            <AdminPub data={pub} />
                                        <small>
                                            <div className="message_date">
                                                <h3 className="date text-info">24</h3>
                                                <p className="month">May</p>
                                            </div>
                                        </small>
                                    </div>
                                    <>
                                        <div>

                                            <div class="">
                                                <p class="card-text"><strong>{pub.title}</strong> {pub.description} </p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                            <div className="image-responsive" >
                                                <img src={`http://localhost:4000/${pub.publishingphoto.url}`}  class="card-img-bottom" alt="..." style={{borderRadius: '10px', maxHeight: '800px'}} />
                                            </div>
                                        </div>
                                    </>
                                    <div id="graph_bar" style={{width:'100%', height:'10px'}}></div>
                                    <div class="btn-group" style={{margin: '15px'}}>
                                        <Like data={pub} />
                                        <button type="button" class="btn btn-outline-secondary" >
                                            <span class="badge ">9</span> &nbsp; &nbsp; commentaire
                                        </button>
                                        
                                    </div>
                                    <div id="graph_bar" style={{width:'100%', height:'10px'}}><hr/></div>
                                        <div class="card-body">
                                            <div class="card-title">
                                                <img src="images/user.png" alt="..." className="img-circle" width="70px"/> &nbsp; &nbsp;
                                                <strong>Mikolo tiana</strong>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    <div id="graph_bar" style={{width:'100%', height:'10px'}}></div>
                                </div>
                            </div>
                            <br/>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default PublicationList
