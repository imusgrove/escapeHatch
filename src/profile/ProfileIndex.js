import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProfileCreate from './ProfileCreate';
import ShelterTable from './ShelterTable';
import ProfileEdit from './ProfileEdit';
import APIURL from './helpers/enviornment'


class ProfileIndex extends Component{

    constructor(props){
        super(props)
        this.state ={
            shelters:[],
            updatePressed: false,
            shelterUpdate: {}
        }
    }

    shelterUpdate = (event, shelters) => {
        fetch(`${APIURL}/shelter/update`, {
            method: 'PUT',
            body: JSON.stringify({update: shelters}), //this might be wrong
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.setState({updatePressed: false})
                this.fetchShelters();
            })
    }

    setUpdatedShelters = (event, shelters) => {
        this.setState({
            shelterUpdate: shelters,
            updatePressed: true
        })
    }

    componentWillMount() {
        this.fetchShelters()
      }


  fetchShelters = () => {
    fetch(`${APIURL}/shelter`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
    })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({ shelters: logData })
        })
}

render() {
    const shelters = this.state.shelters.length >= 1 ?
    <ShelterTable shelters={this.state.shelters} update={this.setUpdatedShelter} />:
    <h2>Fill Out Profile to See Available Shelters</h2>
    return (
      <Container>
        <Row>
          <Col md="3">
            <ProfileCreate token={this.props.token} updateProfileArray={this.fetchShelters}/>
          </Col>
          <Col md="9">
           <ShelterTable />
          </Col>
        </Row>
        <Col md="12">
            {
                this.state.updatePressed ? <ProfileEdit t={this.state.updatePressed} update={this.shelterUpdate} sheters={this.state.setUpdatedShelters} /> : <div></div>
            }
        </Col>
      </Container>
    )
  }
}

export default ProfileIndex;