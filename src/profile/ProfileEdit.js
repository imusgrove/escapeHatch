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
      fetch(`${APIURL}/profile/update/:id`, {
        method: "PUT",
        body: JSON.stringify({ log: this.state }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token
        })
      })
        .then(res => res.json())
        .then(logData => {
          this.props.updateProfileArray();
          this.setState({
            firstName: "",
            lastName: "",
            userEmail: "",
            phone_number: "",
            age: "",
            child: "",
            counseling: "",
            subCounseling: ""
          });
        });
    };
  

  render(){
      return(
              <div>
           
​
          </div>
      )
  }

}

export default ProfileEdit;
