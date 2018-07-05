import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from '../helpers/enviornment';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    fetch(`${APIURL}/user/register`, {
      method: "POST",
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(data => {
        this.props.setToken(data.sessionToken);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className ="initial">
        <h1 className="big">Sign Up</h1>
        <h6 className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem
          quaerat quos voluptatum perferendis. Distinctio culpa iste atque
          blanditiis placeat qui ipsa?
        </h6>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="enter username"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="su_password"
              type="password"
              name="password"
              placeholder="enter password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit" className="bottom">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
