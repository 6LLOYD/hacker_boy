import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventIndex: 0,
      code: "",
      solution: "",
    };
  }

  handleCodeChange = (e) => {
    this.setState({ code: e.target.value });
  };

  handleSolutionChange = (e) => {
    this.setState({ solution: e.target.value });
  };

  handleNextEvent = () => {
    const { eventIndex } = this.state;
    if (eventIndex < this.events.length - 1) {
      this.setState({ eventIndex: eventIndex + 1 });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleNextEvent();
  };

  events = [
    {
      title: "Événement 1 : L'Infiltration",
      description:
        "Vous avez réussi à infiltrer la première couche de sécurité du site de Shadow Coders. Maintenant, vous devez déchiffrer un code caché dans le code source de la page d'accueil.",
      inputLabel: "Entrez le code",
      inputName: "code",
      validation: (state) => state.code === "1", // Exemple de code correct
    },
    {
      title: "Événement 2 : La Salle des Pièges",
      description:
        "Vous avez pénétré dans la salle des pièges. Plusieurs fichiers cachés contiennent des indices, mais certains d'entre eux sont des leurres.",
      inputLabel: "Entrez les informations trouvées",
      inputName: "solution",
      validation: (state) => state.solution === "2", // Exemple de solution correcte
    },
    {
      title: "Événement 3 : Le Serveur Sécurisé",
      description:
        "Vous avez accès à un serveur sécurisé. Pour obtenir les coordonnées des personnes clés, vous devez résoudre une énigme complexe.",
      inputLabel: "Entrez la solution de l'énigme",
      inputName: "solution",
      validation: (state) => state.solution === "3", // Exemple de réponse correcte
    },
    {
      title: "Événement 4 : Le Mot de Passe Final",
      description:
        "Vous avez rassemblé suffisamment d'informations pour deviner le mot de passe final.",
      inputLabel: "Entrez le mot de passe",
      inputName: "code",
      validation: (state) => state.code === "4", // Exemple de mot de passe correct
    },
    {
      title: "congrats",
      description:
        "Vous avez rassemblé suffisamment d'informations pour deviner le mot de passe final.",
    },
  ];

  render() {
    const { eventIndex, code, solution } = this.state;
    const currentEvent = this.events[eventIndex];
    const EventBtn =
      eventIndex === 4 ? (
        <div>
          <Button onClick={this.props.onContactClick} variant="danger">
            Don't Click !!
          </Button>
        </div>
      ) : (
        <Button
          variant={currentEvent.validation(this.state) ? "success" : "primary"}
          type="submit"
          disabled={!currentEvent.validation(this.state)}
        >
          Suivant
        </Button>
      );

    const EventInputBtn =
      eventIndex === 4 ? null : (
        <Form.Control
          type="text"
          value={currentEvent.inputName === "code" ? code : solution}
          onChange={
            currentEvent.inputName === "code"
              ? this.handleCodeChange
              : this.handleSolutionChange
          }
          style={{ width: "250px", textAlign: "center", margin: "10px auto" }}
          autoComplete="off"
        />
      );

    return (
      <Card>
        <Card.Body>
          <Card.Title>{currentEvent.title}</Card.Title>
          <Card.Text>{currentEvent.description}</Card.Text>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="eventInput">
              <Form.Label>{currentEvent.inputLabel}</Form.Label>
              {EventInputBtn}
            </Form.Group>
            {EventBtn}
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Events;
