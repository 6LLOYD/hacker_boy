import React, { Component } from "react";
import {
  Alert,
  Accordion,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HeightIcon from "@mui/icons-material/Height";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WcIcon from "@mui/icons-material/Wc";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user1: {},
      isLoading: true,
      error: null,
      activeEventKey: null,
      showFirst: false,
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/users?skip=1&limit=9")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ users: data.users, isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));

    fetch("https://dummyjson.com/users?limit=1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data1) => {
        this.setState({ user1: data1.users[0], isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  handleAccordionToggle = (eventKey) => {
    this.setState((prevState) => ({
      activeEventKey: prevState.activeEventKey === eventKey ? null : eventKey,
    }));
  };

  showUserOne = () => {
    this.setState({ showFirst: true });
    setTimeout(() => {
      alert("Bien joué, vous avez terminé la mission");
    }, 5000);
  };

  render() {
    const { users, isLoading, error, activeEventKey, user1, showFirst } =
      this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <Alert variant="danger">{error.message}</Alert>;
    }

    const show1 = showFirst ? (
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong>
              {user1.id}. {user1.firstName} {user1.lastName}
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col>
                <p>
                  <strong>
                    <EmailIcon variant="contained" />
                  </strong>{" "}
                  {user1.email}
                </p>
                <p>
                  <strong>
                    <AlternateEmailIcon variant="contained" />
                  </strong>{" "}
                  {user1.username}
                </p>
                <p>
                  <strong>
                    <WcIcon variant="contained" />
                  </strong>{" "}
                  {user1.gender}
                </p>
              </Col>
              <Col>
                <p>
                  <strong>
                    <PhoneIcon variant="contained" />
                  </strong>{" "}
                  {user1.phone}
                </p>
                <p>
                  <strong>
                    <VisibilityIcon variant="contained" />
                  </strong>{" "}
                  {user1.eyeColor}
                </p>
                <p>
                  <strong>
                    <CalendarMonthIcon variant="contained" />
                  </strong>{" "}
                  {user1.birthDate}
                </p>
              </Col>
              <Col>
                <p>
                  <strong>
                    <HomeIcon variant="contained" />
                  </strong>{" "}
                  {user1.address.address}, {user1.address.city}
                </p>
                <p>
                  <strong>
                    <HeightIcon variant="contained" />
                  </strong>{" "}
                  {user1.height} cm
                </p>

                <p onClick={this.showUserOne}>
                  <strong>
                    <MonitorWeightIcon variant="contained" />
                  </strong>{" "}
                  {user1.weight} kg
                </p>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ) : null;

    return (
      <div>
        <h2>Contact</h2>
        <p>Voici les coordonnées des 9 membres :</p>
        <Accordion activeKey={activeEventKey} flush>
          {users.map((user, index) => (
            <Accordion.Item eventKey={String(index)} key={user.id}>
              <Accordion.Header
                onClick={() => this.handleAccordionToggle(String(index))}
              >
                <strong>
                  {user.id}. {user.firstName} {user.lastName}
                </strong>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <p>
                      <strong>
                        <EmailIcon variant="contained" />
                      </strong>{" "}
                      {user.email}
                    </p>
                    <p>
                      <strong>
                        <AlternateEmailIcon variant="contained" />
                      </strong>{" "}
                      {user.username}
                    </p>
                    <p>
                      <strong>
                        <WcIcon variant="contained" />
                      </strong>{" "}
                      {user.gender}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong>
                        <PhoneIcon variant="contained" />
                      </strong>{" "}
                      {user.phone}
                    </p>
                    <p>
                      <strong>
                        <VisibilityIcon variant="contained" />
                      </strong>{" "}
                      {user.eyeColor}
                    </p>
                    <p>
                      <strong>
                        <CalendarMonthIcon variant="contained" />
                      </strong>{" "}
                      {user.birthDate}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong>
                        <HomeIcon variant="contained" />
                      </strong>{" "}
                      {user.address.address}, {user.address.city}
                    </p>
                    <p>
                      <strong>
                        <HeightIcon variant="contained" />
                      </strong>{" "}
                      {user.height} cm
                    </p>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-${user.id}`}>
                          Cliquez pour afficher plus d'informations
                        </Tooltip>
                      }
                    >
                      <p onClick={this.showUserOne}>
                        <strong>
                          <MonitorWeightIcon variant="contained" />
                        </strong>{" "}
                        {user.weight} kg
                      </p>
                    </OverlayTrigger>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <Alert variant="danger" style={{ width: "600px", margin: "20px auto" }}>
          Oh!! Mince alors nous devons trouver le premier de la liste ...
        </Alert>
        {show1}
      </div>
    );
  }
}

export default Contact;
