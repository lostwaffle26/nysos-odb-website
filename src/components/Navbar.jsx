import React from 'react';
import '../style/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';


function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg nav navbar-dark fixed-top">
                <div className="container">
                    <img src={logo} className="nav-logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">A propos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        
                    </div>
                   
                </div>
            </nav>
        </div>
    );
}

export default Navbar;