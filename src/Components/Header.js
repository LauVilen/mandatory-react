import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'

class Header extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="navbar-brand">TheMovieDB</div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item" ><Link to='/' class="nav-link active">Home</Link></li>
                        <li><Link to='/Test' class="nav-link active">Test</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header