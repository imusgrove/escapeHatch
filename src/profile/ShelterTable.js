import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Table
} from "reactstrap";
import ProfileCreate from "./ProfileCreate";
import APIURL from '../helpers/enviornment'

class ShelterTable extends Component {
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
      occupancy: "",
      shelterToUpdate: "shelter", 
      updatePressed: false 
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

 
  
  

  render() {
    return (
      <div>
        <h3>Available Shelters</h3>
        <hr />
        <Table striped>
          <thead>
            <tr>
              <th>Shelter ID #</th>
              <th>Name</th>
              <th> Phone Number</th>
              <th>Email Address</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Contact</th>
              <th>Emotional Counseling Available</th>
              <th>Drug Abuse Counseling Availabe</th>
              <th>Capacity</th>
              <th>Occupancy</th>
            </tr>
          </thead>
          <tbody>
            {this.props.shelters.map((shelters, id) => {
              return (
                <tr key={id}>
                  <th scope="row">{shelters.id}</th>
                  <td>{shelters.shelter_name}</td>
                  <td>{shelters.shelter_number}</td>
                  <td>{shelters.email}</td>
                  <td>{shelters.address}</td>
                  <td>{shelters.city}</td>
                  <td>{shelters.state_init}</td>
                  <td>{shelters.zip_code}</td>
                  <td>{shelters.shelter_contact}</td>
                  <td>{shelters.shelter_counseling}</td>
                  <td>{shelters.shelter_drug_counseling}</td>
                  <td>{shelters.capacity}</td>
                  <td>{shelters.occupancy}</td>
                  <td>
                    <Button id={shelters.id} onClick={this.props.delete}  color="danger">Delete Shelter</Button> 
                    <Button id={shelters.id} onClick={e => this.props.update(e,shelters)} color="warning">Update</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ShelterTable;
