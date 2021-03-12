import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Accueil from '../accueil/Accueil'
import User from '../AllUser/User'
import E_commerce from '../e_commerce/E_commerce'
import Gallery from '../gallery/Gallery'
import Message from '../message/Message'
import Parametre from '../parametre/Parametre'
import Presentation from '../presentation/Presentation'
import ProfileAdmin from '../profileAdmin/ProfileAdmin'
import reservation from '../reservation/reservation'

export class Contenue extends Component {
    render() {
        return (
            <>
                <Route exact path="/" component={Accueil}/>
                <Route exact path="/message" component={Message}/>
                <Route exact path="/commerce" component={E_commerce}/>
                <Route exact path="/reservations" component={reservation}/>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exact path="/profile" component={ProfileAdmin}/>
                <Route exact path="/presentation" component={Presentation}/>
                <Route exact path="/utilisateurs" component={User} />
                <Route exact path="/parametre" component={() => <Parametre user={this.props.data} />} />
            </>
        )
    }
}

export default Contenue
