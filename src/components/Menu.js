import { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Home from "./Home";
import Events from "./Events";
import { Alert } from "react-bootstrap";
import ChatsHistory from "./ChatsHistory";
import Contact from "./Contact";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { tmp: false, showAlert: false };
    // this.handleContact = this.handleContact.bind(this);

    // Binding methods in the constructor ensures that this refers to the component instance when the method is called as an event handler.
    // This is necessary to access and modify the component's state or other instance properties. Using arrow functions for class properties is
    // an alternative that achieves the same goal without explicit binding in the constructor.

    // handleContact() {
    //  this.setState({ tmp: true });
    // };
  }
  handleContact = () => {
    this.setState({ tmp: true });
    setTimeout(() => {
      this.setState({ showAlert: true });
    }, 1000);
  };
  render() {
    const ContactTab = this.state.tmp ? (
      <Tab eventKey="contact" title="Contact">
        <Contact />
      </Tab>
    ) : null;
    return (
      <div>
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3 bg-dark"
          fill
        >
          <Tab eventKey="home" title="Home">
            <Home />
          </Tab>
          <Tab eventKey="profile" title="Events">
            <Events onContactClick={this.handleContact} />
            {this.state.showAlert && (
              <Alert
                variant="success"
                style={{ width: "350px", margin: "10px auto", height: "auto" }}
              >
                well done 'Contact' is avaible now
              </Alert>
            )}
          </Tab>
          <Tab eventKey="chats-history" title="Chats History">
            <ChatsHistory />
          </Tab>
          {ContactTab}
        </Tabs>
      </div>
    );
  }
}
export default Menu;
