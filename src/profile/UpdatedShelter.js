import React, {Component} from 'react';
import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import APIURL from "../helpers/enviornment";

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        shelterName: "",
        shelterNumber: "",
        email: "",
        address: "",
        city: "",
        state: "",
        stateInit: "",
        zipCode: "",
        shelterContact: "",
        shelterCounseling: "",
        shelterDrugCounseling: "",
        capacity: "",
        occupancy: ""
    };
  }
  componentWillMount() {
    this.setState({
        shelterName: this.props.shelter.shelterName,
        shelterNumber: this.props.shelter.shelterName,
        email: this.props.shelter.email,
        address: this.props.shelter.address,
        city: this.props.shelter.city,
        state: this.props.shelter.state,
        stateInit: this.props.shelter.stateInit,
        zipCode: this.props.shelter.zipCode,
        shelterContact: this.props.shelter.shelterContact,
        shelterCounseling: this.props.shelter.shelterCounseling,
        shelterDrugCounseling: this.props.shelter.shelterDrugCounseling,
        capacity: this.props.shelter.capacity,
        occupancy: this.props.shelter.occupancy
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.update(event, this.state);
    fetch(`${APIURL}/shelter/update/:id`, {
      method: "PUT",
      body: JSON.stringify({ shelter: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
      .then(res => res.json())
      .then(logData => {
        this.props.updateShelterArray();
        this.setState({
            shelterName: "",
            shelterNumber: "",
            email: "",
            address: "",
            city: "",
            state: "",
            stateInit: "",
            zipCode: "",
            shelterContact: "",
            shelterCounseling: "",
            shelterDrugCounseling: "",
            capacity: "",
            occupancy: ""
        });
      });
  };

  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Update Shelter</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="shelterName">Name</Label>
                <Input
                  id="shelterName"
                  type="text"
                  name="shelterName"
                  value={this.state.shelterName}
                  placeholder="Enter Name"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="shelterNumber">Phone Number</Label>
                <Input
                  id="shelterNumber"
                  type="tel"
                  name="shelterNumber"
                  value={this.state.shelterNumber}
                  placeholder="Phone Number"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  value={this.state.address}
                  placeholder="Address"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  id="city"
                  type="text"
                  name="city"
                  value={this.state.city}
                  placeholder="City"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="stateInit">State</Label>
                <Input
                  id="stateInit"
                  type="text"
                  name="stateInit"
                  value={this.state.stateInit}
                  placeholder="State"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="zipCode">Zip Code</Label>
                <Input
                  id="zipCode"
                  type="number"
                  name="zipCode"
                  value={this.state.zipCode}
                  placeholder="Zip Code"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="shelterContact">Contact</Label>
                <Input
                  id="shelterContact"
                  type="text"
                  name="shelterContact"
                  value={this.state.shelterContact}
                  placeholder="Contact"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="shelterCounseling">
                  Emotional Counseling?
                </Label>
                <Input
                  type="select"
                  name="shelterCounseling"
                  id="shelterCounseling"
                  value={this.state.shelterCounseling}
                  onChange={this.handleChange}
                  placeholder="Choose Yes or No"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup> 
              <FormGroup>
                <Label for="shelterDrugCounseling">
                  Substance Abuse Counseling?
                </Label>
                <Input
                  type="select"
                  name="shelterDrugCounseling"
                  id="shelterDrugCounseling"
                  value={this.state.shelterDrugCounseling}
                  onChange={this.handleChange}
                  placeholder="Choose Yes or No?"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  type="number"
                  name="capacity"
                  value={this.state.capacity}
                  placeholder="Capacity"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  type="number"
                  name="capacity"
                  value={this.state.capacity}
                  placeholder="Capacity"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="occupancy">Occupancy</Label>
                <Input
                  id="occupancy"
                  type="number"
                  name="occupancy"
                  value={this.state.occupancy}
                  placeholder="Occupancy"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
              <Button type="submit" color="primary">Update</Button>
              </FormGroup>
              
            </Form>
          </ModalBody>
          ​
        </Modal>
        ​
      </div>
    );
  }
}


export default UpdatedShelter;
