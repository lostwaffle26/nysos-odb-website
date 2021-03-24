import React from 'react';
import '../../style/contact.css';
import FadeIn from 'react-fade-in';

function Contact() {

    return (
        <div class="contact">

            <section class="section-padding">
                <FadeIn>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-sm-12 col-md-12">
                                <div class="mb-5">
                                    <h2 class="mb-2">Me contacter</h2>
                                    <p>Bla bla bla bla ?<br />Bla bla bla bla bla !</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-7 col-sm-12">
                                <form class="contact__form" method="post" action="mail.php">

                                    <div class="row">
                                        <div class="col-12">
                                            <div class="alert alert-success contact__msg message-sent" role="alert">
                                                Your message was sent successfully.
                                    </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <input name="name" type="text" class="form-control" placeholder="Nom" required />
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <input name="email" type="email" class="form-control" placeholder="Email" required />
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <input name="subject" type="text" class="form-control" placeholder="Objet" required />
                                        </div>
                                        <div class="col-12 form-group">
                                            <textarea name="message" class="form-control" rows="6" placeholder="Message" required></textarea>
                                        </div>
                                        <div class="col-12 mt-4">
                                            <input name="submit" type="submit" class=" btn btn-hero btn-circled btn-warning" value="Envoyer message" />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="col-lg-5 pl-4 mt-4 mt-lg-0">
                                <h4>Adresse postale</h4>
                                <p class="mb-3">2 Rue Le Corbustier, 13100 Aix-En-Porvence</p>
                                <h4>E-mail</h4>
                                <p class="mb-3">nysos-odb@gmail.com</p>
                                <h4>Site interet</h4>
                                <p>www.nysos-odb.com</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}

export default Contact;