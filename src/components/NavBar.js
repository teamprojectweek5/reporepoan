import React from "react";
import { Collapse, Navbar, NavDropdown, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap";
// import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { fakeAuth } from "../helpers/fakeAuth";
// import { useHistory } from "react-router-dom";

// let history = useHistory();
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  // const Example = props => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => setIsOpen(!isOpen);
  render() {
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">MukuMuka</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);
