import React, { Component } from "react";
import { ListGroup, ListGroupItem, Alert } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/users?limit=9")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ users: data.users, isLoading: false });
        console.log(data);
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { users, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <Alert variant="danger">{error.message}</Alert>;
    }

    return (
      <div>
        <h2>Contact</h2>
        <p>Voici les coordonnées des utilisateurs :</p>
        <ListGroup>
          {users.map((user) => (
            <ListGroupItem key={user.id}>
              <strong>
                {user.firstName} {user.lastName}
              </strong>{" "}
              - {user.email}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default Contact;
