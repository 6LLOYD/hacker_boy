// src/components/Home.js

import React from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-5 mb-5" style={{}}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card style={{ border: "1px solid black", borderRadius: "20px" }}>
            <Card.Body>
              <Card.Title>Bienvenue à Hacker Boy</Card.Title>
              <Card.Text>
                Une aventure interactive où vos compétences en piratage seront
                mises à l'épreuve. Vous êtes Alex, un jeune prodige de
                l'informatique, connu sous le pseudonyme "Hacker Boy". Un matin,
                vous recevez un message crypté sur votre ordinateur portable.
                C'est un appel à l'aide d'une organisation secrète appelée
                "Shadow Coders".
              </Card.Text>
              <Card.Text>
                <strong>Le message dit :</strong>
              </Card.Text>
              <Alert variant="success">
                <Alert.Heading>"Hey, nice to see you</Alert.Heading>
                <em>
                  Cher Hacker Boy, nous avons besoin de votre aide. Une
                  dangereuse organisme cybercriminel, connu sous le pseudonyme
                  de 'Le Fantôme', ont volé des données cruciales. Si nous ne
                  récupérons pas les données de chaque personne de l'organisme à
                  fin de les arrêter, des informations sensibles seront
                  exposées, mettant en danger des milliers de personnes. Nous
                  savons que seul quelqu'un avec vos talents peut retrouver ces
                  coordonnées caché. Pouvez-vous nous aider?"
                </em>
              </Alert>
              <Card.Text className="text-left ml-0">
                <strong>Pour commencer :</strong> Vous devez utiliser vos
                compétences en hacking pour explorer les onglets "Events" et
                "Chat History" . Ce ne sera pas facile - Le Fantôme est un
                adversaire redoutable et a laissé de nombreux pièges et indices
                trompeurs. Mais avec votre intelligence et votre détermination,
                nous sommes sûrs que vous réussirez.
              </Card.Text>
              <Card.Text className="text-left">
                <strong>Objectif final :</strong> Une fois que vous avez résolue
                les événements, une tâche encore plus cruciale vous attend. Vous
                devez récupérer les coordonnées des dix personnes clés
                impliquées dans l'attaque. Ces personnes détiennent les
                informations nécessaires pour lancer une attaque majeure. En
                trouvant leurs coordonnées, vous pourrez les localiser et
                arrêter l'attaque avant qu'il ne soit trop tard.
              </Card.Text>
              <Card.Text className="mt-4">
                <strong>Instructions pour commencer :</strong>
              </Card.Text>
              <ul className="m-5">
                <li className="mb-3">
                  Explorez le site : Parcourez les différentes sections du site
                  pour trouver des indices. Utilisez vos connaissances en HTML,
                  CSS, JavaScript, et toute autre astuce de hacker que vous
                  connaissez pour déverouiller l'onglet "Contact".
                </li>
                <li className="mb-3">
                  Résolvez les énigmes : Les indices sont cachés dans les
                  onglets "Chat History" et "Contact". Soyez attentif à chaque
                  détail. N'oubliez pas de regarder dans le code source du
                  fichier HTML.
                </li>
              </ul>

              <Card.Text className="text-center">
                Bonne chance, Hacker Boy. Le sort de milliers de personnes
                repose sur vos épaules. Utilisez vos compétences, soyez
                vigilant, et souvenez-vous que chaque indice compte. Ensemble,
                nous pouvons arrêter cette menace et assurer la sécurité de
                tous.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
