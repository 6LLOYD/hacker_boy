import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import axios from "axios";

class ChatsHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comments2: [],
      comments3: [],
      isLoading: true,
      error: null,
    };
  }
  componentDidMount() {
    axios
      .get("https://dummyjson.com/comments?limit=10")
      .then((response) => {
        this.setState({ comments: response.data.comments, isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
    axios
      .get("https://dummyjson.com/comments?skip=10&limit=10")
      .then((response) => {
        this.setState({ comments2: response.data.comments, isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
    axios
      .get("https://dummyjson.com/comments?skip=20&limit=10")
      .then((response) => {
        this.setState({ comments3: response.data.comments, isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { comments, comments2, comments3, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <Alert variant="danger">{error.message}</Alert>;
    }
    return (
      <div>
        <Container className="mt-5 mb-5" style={{}}>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card style={{ border: "1px solid black", borderRadius: "20px" }}>
                <Card.Body>
                  <Card.Title>
                    Bienvenue dans l'onglet "Chat History".
                  </Card.Title>
                  <Card.Text>
                    Ici, vous pouvez explorer les fragments de conversations que
                    notre équipe a pu récupérer lors de nos investigations. Ces
                    morceaux de discussions pourraient contenir des indices
                    cruciaux pour déverrouiller de nouveaux secrets ou résoudre
                    des énigmes. Gardez à l'esprit que les conversations sont
                    souvent codées ou fragmentées, alors soyez attentif à chaque
                    détail. Un mot, une phrase ou même un simple emoji pourrait
                    être la clé pour comprendre la véritable signification
                    cachée derrière ces messages. Explorez ces fragments avec
                    soin et utilisez vos compétences en décodage et en analyse
                    pour démêler les mystères cachés dans ces discussions. Bonne
                    chance !
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <ListGroup
          style={{
            border: "1px solid black",
            width: "700px",
            margin: "20px auto",
            borderRadius: "20px",
          }}
        >
          <ListGroupItem>
            <strong>froachel:</strong> Hi Mathis, do you know the 1st of the
            organization? 🚗
          </ListGroupItem>
          {comments.map((comment) => (
            <ListGroupItem key={comment.id}>
              <strong>{comment.user.username}:</strong> {comment.body}
            </ListGroupItem>
          ))}
          <ListGroupItem>
            <strong>Alicia:</strong> Salve, quid agis ?
          </ListGroupItem>
          <ListGroupItem>
            <strong>Bobus:</strong> Bene ago, gratias ! Et tu ?
          </ListGroupItem>
          <ListGroupItem>
            <strong>Alicia:</strong> Optime ! Proiectum perfecisti ?
          </ListGroupItem>

          {comments2.map((comment) => (
            <ListGroupItem key={comment.id}>
              <strong>{comment.user.username}:</strong> {comment.body}
            </ListGroupItem>
          ))}
          <ListGroupItem>
            <strong>Ankle:</strong> No, Mathis Derbov ✈️
          </ListGroupItem>
          <ListGroupItem>
            <strong>Bobus :</strong> FalconHead ?
          </ListGroupItem>
          <ListGroupItem>
            <strong>RamsesII:</strong> No, but I know the 8 others who are in
            front of me 🚢
          </ListGroupItem>
          {comments3.map((comment) => (
            <ListGroupItem key={comment.id}>
              <strong>{comment.user.username}:</strong> {comment.body}
            </ListGroupItem>
          ))}
          <ListGroupItem>
            <strong>Jeufof0:</strong> Mathis Der Bremer? ✈️
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
export default ChatsHistory;
