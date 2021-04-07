import React from 'react';
import '../style/navbar.css';
import logo from '../img/typo.png';


function Navbar() {

    var lists = document.getElementsByClassName('li');
    for (var i = 0; i < lists.length; i++) {
        lists[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
      
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
      
   
          this.className += " active";
        });
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav navbar-dark fixed-top">
                <div className="container">
                    <img src={logo} className="nav-logo" href="/" alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container">
                        <ul className="navbar-nav" id="navbarHead">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">accueil</a>
                            </li>
                            <li className="nav-item">
                                <a id="project" className="nav-link" href="/Project">projets</a>
                            </li>
                            <li className="nav-item">
                                <a id="about" className="nav-link" href="/About">a propos</a>
                            </li>
                            <li className="nav-item">
                                <a id="contact" className="nav-link" href="/Contact">contact</a>
                            </li>
                        </ul>
                        
                    </div>
                   
                </div>
            </nav>
        </div>
    );
}

export default Navbar;