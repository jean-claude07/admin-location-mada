import axios from 'axios';
import React, { Component } from 'react'
import Index from './pages/index/Index';
import LoginAdmin from './pages/loginAdmin/LoginAdmin';

export class App extends Component {
  state={
    userAdmin: {}
  }

  componentDidMount = () => {
    if(sessionStorage.id){
        this.getAdmin();
    }
  }

  getAdmin = () => {
      axios.get(`admins/${sessionStorage.id}`).then(resp => {
          if(resp.status === 200 ){
              this.setState({
                  userAdmin: resp.data
              })
          }
      })
  }
  render() {
    const token = this.state.userAdmin.token
    console.log(localStorage.token)
    let page;

    if(sessionStorage.id){
      if(token === localStorage.token){
        page = <Index user={this.state.userAdmin} />
      }
    }else{
      page = <LoginAdmin />
    }
    return (
      <>
       {page}
      </>
    )
  }
}

export default App
