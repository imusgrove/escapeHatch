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
import APIURL from '../helpers/enviornment'

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      userEmail: "",
      phoneNumber: "",
      age: "",
      child: "",
      counseling: "",
      subCounseling: ""
    };
  }
  componentWillMount(){
      this.setState({
        id: this.props.profile.id,
        firstName: this.props.profile.firstName,
        lastName: this.props.profile.lastName,
        userEmail: this.props.profile.userEmail,
        phoneNumber:this.props.profile.phoneNumber,
        age: this.props.profile.age,
        child: this.props.profile.child,
        counseling: this.props.profile.counseling,
        subCounseling: this.props.profile.subCounseling
      })
  }


  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.update(event, this.state)
      // fetch(`${APIURL}/profile/update/:id`, {
      //   method: "PUT",
      //   body: JSON.stringify({ log: this.state }),
      //   headers: new Headers({
      //     "Content-Type": "application/json",
      //     Authorization: this.props.token
      //   })
      // })
      //   .then(res => res.json())
      //   .then(logData => {
      //     this.props.updateProfileArray();
      //     this.setState({
      //       firstName: "",
      //       lastName: "",
      //       userEmail: "",
      //       phone_number: "",
      //       age: "",
      //       child: "",
      //       counseling: "",
      //       subCounseling: ""
      //     });
      //   });
    };
  

  render(){
      return(
              <div>
            <Modal isOpen={true} > 
                <ModalHeader>Update Profile</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="Enter First Name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="Enter Last Name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
              id="userEmail"
              type="text"
              name="userEmail"
              value={this.state.userEmail}
              placeholder="Enter Email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              placeholder="Enter Phone Number"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              id="age"
              type="number"
              name="age"
              value={this.state.age}
              placeholder="Enter Age"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="child">Children</Label>
            <Input
              id="child"            
              type="select"
              name="child"
              value={this.state.child}
              placeholder="Enter # of Children"
              onChange={this.handleChange}
              >
              <option value="0">0</option>
              <option valude="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="counseling">Do You Need Emotional Counseling?</Label>
            <Input
              type="select"
              name="counseling"
              id="counseling"
              value={this.state.counseling}
              onChange={this.handleChange}
              placeholder="Choose Yes or No"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="subCounseling">
              Do You Need Substance Abuse Counseling?
            </Label>
            <Input
              type="select"
              name="subCounseling"
              id="subCounseling"
              value={this.state.subCounseling}
              onChange={this.handleChange}
              placeholder="Choose Yes or No?"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Input>
          </FormGroup>
          <Button type="submit" color="primary">Submit</Button>          
        </Form>
                </ModalBody>
​
            </Modal>
​
          </div>
      )
  }

}

export default ProfileEdit;
