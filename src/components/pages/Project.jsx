import {React, useState} from 'react';
import '../../style/project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import soon from '../../img/coming+soon.jpg';
import Modal from 'react-bootstrap/Modal';

function Project() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <section id="service-head" className="service-style-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-12 m-auto">
                            <div className="heading text-white text-center">
                                <h4 className="section-title text-white">Projets</h4>
                                <p>Voici les différents projets que nous avons réalisé au fil des années passées.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="service">
                <div className="container">
                    <div className="row">
                        <div className="card-service">
                            <div className="card mb-3 shadow p-3 mb-5 bg-white">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={soon} className="card-img" alt="coming soon" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Projet</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut enim diam.</p>
                                            <a href="#" className="btn btn-hero btn-circled btn-warning" onClick={handleShow} >En savoir plus</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3 shadow p-3 mb-5 bg-white">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={soon} className="card-img" alt="coming soon" />                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Projet</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut enim diam.</p>
                                            <a href="#" className="btn btn-hero btn-circled  btn-warning" onClick={handleShow}>En savoir plus</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3 shadow p-3 mb-5 bg-white">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={soon} className="card-img" alt="coming soon" />                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Projet</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut enim diam.</p>
                                            <a href="#" className="btn btn-hero btn-circled btn-warning" onClick={handleShow}>En savoir plus</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Infos sur le projet</Modal.Title>
                </Modal.Header>
                <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis consectetur vehicula. Donec sit amet ligula blandit, tincidunt neque id, tristique risus. In hac habitasse platea dictumst. Aliquam lorem orci, egestas sit amet mauris a, lobortis aliquam ipsum. Aenean sit amet sem laoreet eros ornare finibus. Sed arcu risus, cursus commodo ligula non, interdum tristique dui. Nunc nec viverra eros. Donec venenatis diam sed tempus accumsan. Praesent sed ante at purus fermentum bibendum quis vitae libero. Donec dignissim lorem quis elit vehicula sollicitudin.
                     Sed aliquet mattis nulla non accumsan. Donec iaculis, eros eu ultrices faucibus, nisi lectus vestibulum orci, quis feugiat nulla quam ut urna. Nulla eleifend metus sit amet tellus euismod pretium. Nunc semper,
                     arcu id laoreet congue, sapien odio suscipit massa, in bibendum nunc justo id nulla. Etiam eu felis sed ipsum ornare vehicula. Nulla ligula ipsum, scelerisque sit amet mauris ut, imperdiet dignissim nisi.</Modal.Body>
                <Modal.Footer>
                    <a href="#" className="btn btn-hero btn-circled btn-danger" onClick={handleClose}>Fermer</a>
                </Modal.Footer>
            </Modal>

        </div>

    );
}

export default Project;