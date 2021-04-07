import { React, useState } from 'react';
import '../../style/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Modal from 'react-bootstrap/Modal';
import FadeIn from 'react-fade-in';

function About() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div class="container py-4">
                <FadeIn>
                    <div class="p-5 mb-4 rounded-3">
                        <div class="container-fluid py-5">
                            <h1 class="display-5 fw-bold text-white">nysos :</h1>
                            <p class="col-md-8 fs-4 text-white">
                                Diminutif de Dionysos, dieu de la vigne, du vin et de ses excès, de la folie et de la démesure.
                                J’adore la mythologie grecque, et les vertus de l’alcool et ce que sa représente. Un poison permettant de se croire libre, que ce soit au niveau des sentiments mais aussi des contraintes du monde qui nous entoure. Tout simplement, bourré on le courage de comprendre ce qu’on ressent et de l’exprimer mais aussi de se libérer des contraintes de la vie de tous les jours,
                         le travail, l’argent, l’amour, … C’est cette dualité qui m’intéresse la tristesse/le bonheur</p>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay="400">
                    <div class="row align-items-md-stretch">
                        <div class="col">
                            <div class="h-100 p-5 text-black bg-warning rounded-3">
                                <h2>en savoir plus</h2>
                                <p>Vous pouvez consulter une courte interview réalisée afin d'en apprendre plus sur moi.</p>
                                <a class="btn btn-dark" type="button" onClick={handleShow}>Interview</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="h-100 p-5 bg-light border rounded-3">
                                <h2 class="d-flex align-content-center justify-content-around">réseaux sociaux</h2>
                                <div class="social">

                                    <a href="/" class="btn btn-lg "><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                                    <a href="/" class="btn btn-lg "><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                                    <a href="/" class="btn btn-lg "><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
            <div>
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Interview</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>D’où viens-tu ?</h5>

- Je suis né à Gaillac, c'est entre Toulouse et Albi, dans un tout petit quartier, le genre de quartier ou tu as 4 bâtiments (rigole). J’ai très rapidement bougé, entre les conneries à l’école, mes parents qui divorcent, etc … Je suis allée dans différentes villes de la région. Aujourd’hui ça fait 4 ans que je suis sur Aix-en-Provence pour les études.

<h5>Quel est ton rapport avec la musique ?</h5>
- Depuis tout petit je suis dedans ! Ma mère était traiteur et un peu spécialisée dans les évènements du style, concerts festivals, … Du coup très jeune j’étais en contact avec ce monde. Il y avait un peu de tous les styles Rock, metal, reggae, Punk rock, rap, … Dès que j’en ai eu l'âge j’ai fais de la musique, en marchant dans les pas de mon grand frère en faisant de la batterie. Puis après il y a la MJC. Je suis moi même passer par plusieurs styles : punk rock, jazz, électro (tu peux trouver des sons bien sombres sur soundcloud ^^’) Et puis le rap m’a mis une claque, une véritable drogue

<h5>Peux-tu nous en dire plus sur tes débuts d’artiste ? </h5>

- Classique, première fois ou je partage mes sons c’est en tant que beatmaker puis ensuite sur soundcloud et youtube où je rap. J’ai sortis une dizaine de clips solo, j’avais la dalle, je faisais tout… mais c’était claqué (rigole)


<h5>Que s’est-il passé depuis ?</h5>
- J’ai participé à quelques concours, à quelques concerts, … Et après ça j’ai tout supprimé pour repartir sur de bonnes bases. Développer mon style pour avoir une réelle identité artistique. Depuis rien est sortis pendant 1 an voir 2 ans, mais ça devrait revenir pour janvier 2021


<h5>Tes premiers pas en studio, c'était comment ? </h5>
- J’ai toujours le son de mon premier record. C’était chez un gars qui faisais des covers de variété qui avait du matos. Quand je l’écoute je me dis qu’on vient de loin. Mais je me souviens qu’après cette expérience il me fallait du matos et continuer à taffer

<h5>Comment tu bosses tes morceaux en général ? Plutôt solitaire ? Et pour l'écriture ? </h5>
- j’ai pas de schéma type. Des fois je compose une mélo, des fois je vais direct cherchez un bon vieux type beat, parfois j’écris puis je cherche une prod et/ou je compose. Le truc qui est récurrent c’est d’avoir une ambiance à avoir, puis de trouver une topline et après soit je vais direct en cabine ou bien j’écris.
Je travaille toujours seul après j’aime bien aller chercher des avis pendant le processus de création.


<h5>Une phrase qui définirait ton univers ?</h5>
- Nique sa mère, ça me définit bien. Faire comme les autres me fait pas kiffer donc “nique sa mère”. Après je dirais que mon univers est assez mélancolique.

<h5>Tu te considères comme un perfectionniste ?</h5>
- J’ai arréter de sortir des trucs pendant 2 ans parceque j’estimais que c’était de la merde, pourtant je kiffais et il y avait du bon pour le context. Donc ouais, mais aujourd’hui je capte qu’il y aura toujours un truc qui ne me vas pas et que des fois j’ai pas forcément les capacités pour pallier ça dans l’instant T. DOnc autant le partager pour avancer

<h5>Comment envisages- tu la suite ? </h5>
- Nique sa mère. Je vais sortir des sons, des clips. L’objectif est de faire vivre une expérience avec ma musique


<h5>Sortir ces sons c’est donc un soulagement pour toi ?</h5>
- On peut dire ça. Dans mes sons il y a une partie de moi et de les sortir ça me permet de me vider de plein de choses. Mais aussi te plus trop me prendre la tête sur ces sons qui ne sortent pas, sur le temps qui passe et de voir que j’avance pas etc ...

<h5>Comment décrirais-tu ce nouveau projet ?</h5>
- Le projet sera une suite d’Ep qui vont s'appeler “chargement. DU coup je le vois juste comme le début, comme quelque chose en chargement, en construction, comme une expérience ou j’invite les gens à la vivre avec moi

<h5>Tu comptes diversifier tes prods, tu travailles avec qui ?</h5>
- J’ai eu le temps de me tester sur plein de prods différentes. J’ai un style qui me plait mais je veux le diversifier. C’est chiant un artiste qui pose toujours sur le même prods en général à part certains qui font toujours la même recette et que ça reste quand même énervé: hugo TSR, jul, Kery James,...Aujourd’hui J’ai toujours cette habitude de travailler seul, mais doucement je me fais entouré de beatmaker, ingé sons, rappeurs,...

<h5>Quels sont tes prochains objectifs ?</h5>
- Finir un autre sons et arrêter d’expérimenter à droite à gauche pour ne jamais finir un truc

                    </Modal.Body>
                    <Modal.Footer>
                        <a className="btn btn-hero btn-circled btn-danger" onClick={handleClose}>Fermer</a>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default About;