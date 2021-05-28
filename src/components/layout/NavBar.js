
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav
                 className = "navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <h1><Link to="/" className="navbar-brand">Pokedex</Link></h1>
                </div>    
                </nav>
                
            </div>
        )
    }
}
