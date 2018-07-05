import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ProfileCreate from "./ProfileCreate";
import ShelterTable from "./ShelterTable";
import APIURL from "../helpers/enviornment";
import UpdatedShelter from "./UpdatedShelter";

class ProfileIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelters: [],
      updatePressed: false,
      shelterUpdate: {},
      profile: [],
      profileToUpdate: {},
      counseling: false,
      subCounseling: false
    };
  }

  componentWillMount() {
    this.fetchShelters();
  }

  fetchShelters = () => {
    fetch(`${APIURL}/shelter`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
      .then(res => res.json())
      .then(logData => {
        return this.setState({ shelters: logData });
      });
  };

  shelterDelete = (event) => {
    fetch(`${APIURL}/shelter/delete/${event.target.id}`, {
      method: "DELETE",
      body: JSON.stringify({ delete: { id: event.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
    .then(res => this.fetchShelters);
  };

  render() {
    const shelters =
      this.state.shelters.length >= 1 ? 
        <ShelterTable
          shelters={this.state.shelters}
          delete={this.shelterDelete}
          update={this.state.shelterUpdate}
        />
       : 
        <h2>Available Shelters</h2>
      ;
    return (
      <Container>
        <Row>
          <Col md="3">
            <ProfileCreate
              token={this.props.token}
              updateProfileArray={this.fetchShelters}
            />
          </Col>
          <Col md="9">{shelters}</Col>
        </Row>
        <Col md="12">
          {this.state.updatePressed ? (
            <UpdatedShelter
              t={this.state.updatePressed}
              update={this.profileUpdate}
              profile={this.state.profileToUpdate}
            />
          ) : (
            <div />
          )}
        </Col>
      </Container>
    );
  }
}

export default ProfileIndex;
