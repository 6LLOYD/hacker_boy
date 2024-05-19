import { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Home from "./Home";
import Events from "./Events";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { tmp: false };
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
  };
  render() {
    const Contact = this.state.tmp ? (
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    ) : null;
    return (
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3 bg-dark"
        fill
      >
        <Tab eventKey="home" title="Home">
          <Home />
        </Tab>
        <Tab eventKey="profile" title="Events">
          <Events onContactClick={this.handleContact} />
        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger Tab">
          Tab content for Loooonger Tab
        </Tab>
        {Contact}
      </Tabs>
    );
  }
}
export default Menu;
