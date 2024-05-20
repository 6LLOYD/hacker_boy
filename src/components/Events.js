import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventIndex: 0,
      code: "",
      code1: "",
      code2: "",
      code3: "",
      solution: "",
    };
  }

  handleCodeChange = (e) => {
    this.setState({ code: e.target.value });
    this.setState({ code1: e.target.value });
    this.setState({ code2: e.target.value });
    this.setState({ code3: e.target.value });
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
        "Vous avez réussi à infiltrer la première couche de sécurité. " +
        "Maintenant, vous devez trouver un code, nous supposons qu'il est caché dans le code source de la page, regardait en dessous de la classe 'App'.",
      inputLabel: "Entrez le code",
      inputName: "code",
      validation: (state) => state.code === "1", // Exemple de code correct 190106000007
    },
    {
      title: "Événement 2 : Nom du Projet",
      description:
        "Vous avez pénétré dans la salle des pièges. Nous avons besoins du nom du projet.",
      inputLabel: "Entrez l'information trouvée",
      inputName: "code",
      validation: (state) => state.code1 === "2", // Exemple de solution correcte FalconHead
    },
    {
      title: "Événement 3 : Le Serveur Sécurisé",
      description:
        "Vous avez accès à un serveur sécurisé. Pour obtenir les coordonnées des personnes clés, vous devez trouver le nom et prénom de la 10e personne de l'organisme.",
      inputLabel: "Entrez le nom et prénom",
      inputName: "code",
      validation: (state) => state.code2 === "3", // Exemple de réponse correcte Mathis Derbov
    },
    {
      title: "Événement 4 : Final",
      description: "Par quelle moyen l'organisme se deplace",
      inputLabel: "Entrez l'information trouvée",
      inputName: "code",
      validation: (state) => state.code3 === "4" || state.code3 === "bateau", // Exemple de mot de passe correct Bateau
    },
    {
      title: "Bien joué",
      description: "Vous avez résolue toute les évenements.",
    },
  ];

  render() {
    const { eventIndex, code, solution, code1 } = this.state;
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
          Envoyer
        </Button>
      );

    const EventInputBtn =
      eventIndex === 4 ? null : (
        <Form.Control
          type="text"
          value={currentEvent.inputName === "code" ? code || code1 : solution}
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
      <Card
        style={{
          width: "90%",
          margin: "30px auto",
          border: "1px solid black",
          borderRadius: "20px",
        }}
      >
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
