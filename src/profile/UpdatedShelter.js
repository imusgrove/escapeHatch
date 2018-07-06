import React, {Component} from 'react';
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

class UpdatedShelter extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({
        id: "",
        shelter_name: "",
        shelter_number: "",
        email: "",
        address: "",
        city: "",
        state: "",
        state_init: "",
        zip_code: "",
        shelter_contact: "",
        shelter_counseling: "",
        shelter_drug_counseling: "",
        capacity: "",
        occupancy: ""
    }, props.shelter)

  }
//   componentWillMount() {
//     this.setState({
//         shelter_name: this.props.shelter.shelter_name,
//         shelter_number: this.props.shelter.shelter_name,
//         email: this.props.shelter.email,
//         address: this.props.shelter.address,
//         city: this.props.shelter.city,
//         state: this.props.shelter.state,
//         state_init: this.props.shelter.state_init,
//         zip_code: this.props.shelter.zip_code,
//         shelter_contact: this.props.shelter.shelter_contact,
//         shelter_counseling: this.props.shelter.shelter_counseling,
//         shelter_drug_counseling: this.props.shelter.shelter_drug_counseling,
//         capacity: this.props.shelter.capacity,
//         occupancy: this.props.shelter.occupancy
//     });
//   }

shelterUpdate = (event,shelter) => {
    fetch(`${APIURL}/shelter/update/${event.target.id}`, {
      method: 'PUT',
      body: JSON.stringify({ update: shelter }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => {
      this.setState({ updatePressed: false })
      this.fetchShelters();
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
      console.log('handleSubmit', event, this.state, event.target)
    event.preventDefault();
    // this.props.update(event, this.state);
    fetch(`${APIURL}/shelter/update/${this.state.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...this.state }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: this.props.token
      }
    })
      .then(res => res.json())
      .then(logData => {
        // this.props.updateProfileArray();
        this.setState({
            shelter_name: "",
            shelter_number: "",
            email: "",
            address: "",
            city: "",
            state: "",
            state_init: "",
            zip_code: "",
            shelter_contact: "",
            shelter_counseling: "",
            shelter_drug_counseling: "",
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
                <Label for="shelter_name">Name</Label>
                <Input
                  id="shelter_name"
                  type="text"
                  name="shelter_name"
                  value={this.state.shelter_name}
                  placeholder="Enter Name"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="shelter_number">Phone Number</Label>
                <Input
                  id="shelter_number"
                  type="tel"
                  name="shelter_number"
                  value={this.state.shelter_number}
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
                <Label for="state_init">State</Label>
                <Input
                  id="state_init"
                  type="text"
                  name="state_init"
                  value={this.state.state_init}
                  placeholder="State"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="zip_code">Zip Code</Label>
                <Input
                  id="zip_code"
                  type="number"
                  name="zip_code"
                  value={this.state.zip_code}
                  placeholder="Zip Code"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="shelter_contact">Contact</Label>
                <Input
                  id="shelter_contact"
                  type="text"
                  name="shelter_contact"
                  value={this.state.shelter_contact}
                  placeholder="Contact"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="shelter_counseling">
                  Emotional Counseling?
                </Label>
                <Input
                  type="select"
                  name="shelter_counseling"
                  id="shelter_counseling"
                  value={this.state.shelter_counseling}
                  onChange={this.handleChange}
                  placeholder="Choose Yes or No"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup> 
              <FormGroup>
                <Label for="shelter_drug_counseling">
                  Substance Abuse Counseling?
                </Label>
                <Input
                  type="select"
                  name="shelter_drug_counseling"
                  id="shelter_drug_counseling"
                  value={this.state.shelter_drug_counseling}
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
