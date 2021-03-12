import axios from 'axios';
import React, { Component } from 'react'

export class AdminPub extends Component {
    state={
        admin: {}
    }

    componentDidMount = () => {
        this.getAdmin();
    }

    getAdmin = () => {
        axios.get(`admins/${this.props.data.admin_id}`).then(response => {
            this.setState({
                admin: response.data.admin
            })
        })
    }
    render() {
        const admin = this.state.admin
        const image = admin.adminphoto
        // const photo = image.url
        return (
            <>
                <div class="">
                    <h5 class="card-title">
                        <img src={`http://localhost:4000/${image && image.url}`} class="rounded-circle" alt="..." width="150px"/> &nbsp; &nbsp;
                        {admin && admin.adminName}
                    </h5>
                </div>  
            </>
        )
    }
}

export default AdminPub
