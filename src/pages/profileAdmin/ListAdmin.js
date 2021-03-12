import axios from 'axios';
import React, { Component } from 'react'

export class ListAdmin extends Component {
    state={
        admins :[]
    }

    componentDidMount = () => {
        this.getAdmin();
    }

    getAdmin = () => {
        axios.get('admins').then(response => {
            this.setState({
                admins: response.data
            })
        })
    }
    render() {
        const admins = this.state.admins
        console.log(admins)
        return (
            <>
                <table id="datatable-buttons" class="table table-striped table-bordered" style={{width:'100%'}}>
                    <thead>
                        <tr>
                        <th>photo</th>
                        <th>Nom d' admin</th>
                        <th>Email</th>
                        <th>
                            Depuis
                        </th>
                        <th>action</th>
                        
                        </tr>
                    </thead>


                    <tbody>
                    {admins && admins.map(admin => {
                        const date = new Date(admin.created_at);
                        const daty = date.toLocaleDateString()
                        
                        let image;
                        if(admin.adminphoto.url === null){
                            image = <img src="images/user.png" class="rounded-circle" alt="..." width="150px"/>
                        }else{
                            image = <img src={`http://localhost:4000/${admin.adminphoto.url}`} class="rounded-circle" alt="..." width="150px"/>
                        }
                        return (
                            <>
                                <tr>
                                    <td>
                                        {image}
                                    </td>
                                    <td >
                                        <br/>
                                        <br/>
                                        {admin.adminName} 
                                    </td>
                                    <td>
                                        <br/>
                                        <br/>
                                        {admin.email} 
                                    </td>
                                    <td class="a-center ">
                                        <br/>
                                        <br/>
                                        {daty}
                                    </td>
                                    <td>
                                        <br/>
                                        <br/>
                                        <button type="button" class="btn btn-outline-danger">Supprimer</button>
                                    </td>
                                   
                                </tr>
                            </>
                        )
                    })}
                        
                    
                    </tbody>
                </table>
            </>
        )
    }
}

export default ListAdmin
