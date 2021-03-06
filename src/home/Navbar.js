import React, { Component } from "react";
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button, 
    Jumbotron,
    Container } from "reactstrap";

class Sitebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpen:false
    };
  }

  toggle = () =>{
      this.setState({
          isOpen: !this.state.isOpen
      })
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Sitebar;
